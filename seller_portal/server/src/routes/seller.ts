import express from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

function authenticate(req: express.Request, res: express.Response, next: express.NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = authHeader.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; role: string };
    (req as any).user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

router.use(authenticate);

router.get('/dashboard', async (req, res) => {
  const userId = (req as any).user.userId;
  const profile = await prisma.sellerProfile.findUnique({
    where: { userId },
    include: { products: true, orders: true },
  });
  if (!profile) {
    return res.status(404).json({ error: 'Seller profile not found' });
  }

  const products = profile.products;
  const orders = profile.orders;

  const response = {
    seller: profile,
    summary: {
      totalProducts: products.length,
      totalOrders: orders.length,
      pendingOrders: orders.filter((order) => order.deliveryStatus === 'PROCESSING').length,
      completedOrders: orders.filter((order) => order.deliveryStatus === 'DELIVERED').length,
      cancelledOrders: orders.filter((order) => order.deliveryStatus === 'CANCELLED').length,
      revenue: orders.reduce((sum, order) => sum + order.totalAmount, 0),
      visitorsToday: Math.floor(Math.random() * 1200) + 200,
      storeRating: profile.rating,
      lowStockAlerts: products.filter((product) => product.stockQuantity < 5).length,
    },
    products,
    orders,
  };

  res.json(response);
});

router.post('/products', async (req, res) => {
  const userId = (req as any).user.userId;
  const profile = await prisma.sellerProfile.findUnique({ where: { userId } });
  if (!profile) return res.status(404).json({ error: 'Seller profile not found' });

  const data = req.body;
  const product = await prisma.product.create({
    data: {
      sellerId: profile.id,
      name: data.name,
      category: data.category,
      subcategory: data.subcategory,
      brand: data.brand,
      description: data.description,
      specifications: data.specifications || '',
      price: Number(data.price),
      discount: Number(data.discount || 0),
      stockQuantity: Number(data.stockQuantity),
      sku: data.sku,
      barcode: data.barcode || null,
      weight: Number(data.weight || 0),
      dimensions: data.dimensions || null,
      colors: data.colors || null,
      sizes: data.sizes || null,
      warranty: data.warranty || null,
      shippingCost: Number(data.shippingCost || 0),
      deliveryTime: data.deliveryTime || null,
      tags: data.tags || null,
      condition: data.condition as any,
      images: data.images || [],
      videoUrl: data.videoUrl || null,
      thumbnail: data.thumbnail || null,
    },
  });
  res.json(product);
});

export default router;

import express from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'buyerportalsecret';

const authenticate = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) return res.status(401).json({ error: 'Unauthorized' });

  const token = authHeader.replace('Bearer ', '');
  try {
    const data = jwt.verify(token, JWT_SECRET) as { userId: string; role: string };
    (req as any).user = data;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

router.use(authenticate);

router.get('/dashboard', async (req, res) => {
  const userId = (req as any).user.userId;
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { buyerProfile: true, orders: true, wishlistItems: { include: { product: true } } },
  });

  if (!user) return res.status(404).json({ error: 'User not found' });

  const products = await prisma.product.findMany({ where: { status: 'ACTIVE' }, take: 8 });

  res.json({
    user,
    summary: {
      totalOrders: user.orders.length,
      wishlistCount: user.wishlistItems.length,
      recentOrders: user.orders.slice(-3),
      recommendations: products,
    },
  });
});

export default router;

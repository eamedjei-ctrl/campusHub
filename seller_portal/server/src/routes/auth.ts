import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

router.post('/register', async (req, res) => {
  const {
    businessName,
    ownerName,
    phoneNumber,
    email,
    businessAddress,
    country,
    region,
    city,
    storeName,
    businessType,
    registrationNumber,
    taxNumber,
    password,
  } = req.body;

  if (!businessName || !ownerName || !phoneNumber || !email || !businessAddress || !country || !region || !city || !storeName || !businessType || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return res.status(409).json({ error: 'Email already in use' });
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role: 'SELLER',
      sellerProfile: {
        create: {
          businessName,
          ownerName,
          phoneNumber,
          businessAddress,
          country,
          region,
          city,
          storeName,
          businessType,
          registrationNumber,
          taxNumber,
        },
      },
    },
    include: { sellerProfile: true },
  });

  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

  res.json({ token, user: { id: user.id, email: user.email, role: user.role, sellerProfile: user.sellerProfile } });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing credentials' });
  }

  const user = await prisma.user.findUnique({ where: { email }, include: { sellerProfile: true } });
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user.id, email: user.email, role: user.role, sellerProfile: user.sellerProfile } });
});

export default router;

import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'buyerportalsecret';

router.post('/register', async (req, res) => {
  const { firstName, lastName, username, email, phoneNumber, password, country, region, city, address, profilePicture } = req.body;
  if (!firstName || !lastName || !username || !email || !password || !country || !region || !city || !address) {
    return res.status(400).json({ error: 'Missing required registration fields' });
  }

  const existing = await prisma.user.findFirst({ where: { OR: [{ email }, { username }] } });
  if (existing) {
    return res.status(409).json({ error: 'Email or username already taken' });
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      username,
      email,
      phoneNumber,
      password: hashedPassword,
      role: 'BUYER',
      buyerProfile: {
        create: {
          country,
          region,
          city,
          address,
          profilePicture,
        },
      },
    },
    include: { buyerProfile: true },
  });

  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user.id, email: user.email, username: user.username, role: user.role, buyerProfile: user.buyerProfile } });
});

router.post('/login', async (req, res) => {
  const { identifier, password } = req.body;
  if (!identifier || !password) {
    return res.status(400).json({ error: 'Missing login credentials' });
  }

  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: identifier }, { phoneNumber: identifier }, { username: identifier }],
    },
    include: { buyerProfile: true },
  });

  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user.id, email: user.email, username: user.username, role: user.role, buyerProfile: user.buyerProfile } });
});

export default router;

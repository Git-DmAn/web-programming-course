//import { PrismaClient } from '@prisma/client';
// Создаем единственный экземпляр PrismaClient для всего приложения
//const prisma = new PrismaClient();

import { PrismaClient } from '../generated/prisma/client.js'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

// Создаём адаптер для базы SQLite
const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || 'file:./dev.db', // путь к файлу базы из .env
})

// Создаём клиент Prisma — это наш "мостик" к базе данных
const prisma = new PrismaClient({ adapter })

export default prisma;
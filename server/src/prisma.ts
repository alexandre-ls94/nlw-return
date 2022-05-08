import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  // loga toda vez que um novo evento acontecer no BD
  log: ['query']
})

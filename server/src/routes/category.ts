import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function categoryRoutes(app: FastifyInstance) {
  app.get('/category', async () => {
    const categories = await prisma.category.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return categories
  })

  app.get('/category/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    try {
      const category = await prisma.category.findUniqueOrThrow({
        where: { id },
      })

      return category
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.post('/category', async (req) => {
    const bodySchema = z.object({
      name: z.string(),
      desc: z.string().default(''),
    })

    const { name, desc } = bodySchema.parse(req.body)

    try {
      const category = await prisma.category.create({
        data: { name, desc },
      })

      return category
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.put('/category/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    const bodySchema = z.object({
      name: z.string(),
      desc: z.string().default(''),
    })

    const { name, desc } = bodySchema.parse(req.body)

    try {
      const category = await prisma.category.update({
        where: { id },
        data: { name, desc },
      })

      return category
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.delete('/category/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    await prisma.category.delete({
      where: { id },
    })
  })
}

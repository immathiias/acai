import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function additionalRoutes(app: FastifyInstance) {
  app.get('/additional', async () => {
    const additional = await prisma.additional.findMany()

    return additional
  })

  app.get('/additional/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    try {
      const additional = await prisma.additional.findUniqueOrThrow({
        where: { id },
      })

      return additional
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.get('/additional/types/:type?', async (req) => {
    const paramsSchema = z.object({
      type: z.string(),
    })

    const { type } = paramsSchema.parse(req.params)

    try {
      const additional = await prisma.additional.findMany({
        where: { type },
      })

      return additional
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.post('/additional', async (req) => {
    const bodySchema = z.object({
      productId: z.string().uuid(),
      name: z.string(),
      type: z.string().default('FRUIT'),
      price: z.number(),
    })

    const { productId, name, type, price } = bodySchema.parse(req.body)

    try {
      const additional = await prisma.additional.create({
        data: { productId, name, type, price },
      })

      return additional
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.put('/additional/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    const bodySchema = z.object({
      productId: z.string().uuid(),
      name: z.string(),
      type: z.string().default('FRUIT'),
      price: z.number(),
    })

    const { productId, name, type, price } = bodySchema.parse(req.body)

    try {
      const additional = await prisma.additional.update({
        where: { id },
        data: { productId, name, type, price },
      })

      return additional
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.delete('/additional/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    await prisma.additional.delete({
      where: { id },
    })
  })
}

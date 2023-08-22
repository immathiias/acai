import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function flyerRoutes(app: FastifyInstance) {
  app.get('/flyer', async () => {
    const flyers = await prisma.flyers.findMany()

    return flyers
  })

  app.get('/flyer/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    try {
      const flyer = await prisma.flyers.findUniqueOrThrow({
        where: { id },
      })

      return flyer
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.post('/flyer', async (req) => {
    const bodySchema = z.object({
      productId: z.string().uuid(),
      imageUrl: z.string().url(),
      alt: z.string().default(''),
    })

    const { productId, imageUrl, alt } = bodySchema.parse(req.body)

    try {
      const flyer = await prisma.flyers.create({
        data: { productId, imageUrl, alt },
      })

      return flyer
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.put('/flyer/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    const bodySchema = z.object({
      productId: z.string().uuid(),
      imageUrl: z.string().url(),
      alt: z.string().default(''),
    })

    const { productId, imageUrl, alt } = bodySchema.parse(req.body)

    try {
      const flyer = await prisma.flyers.update({
        where: { id },
        data: { productId, imageUrl, alt },
      })

      return flyer
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.delete('/flyer/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    await prisma.flyers.delete({
      where: { id },
    })
  })
}

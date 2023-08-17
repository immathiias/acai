import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function weightRoutes(app: FastifyInstance) {
  app.get('/weight', async () => {
    const weights = await prisma.weight.findMany()

    return weights
  })

  app.get('/weight/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    try {
      const weight = await prisma.weight.findUniqueOrThrow({
        where: { id },
      })

      return weight
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.post('/weight', async (req) => {
    const bodySchema = z.object({
      productId: z.string().uuid(),
      weightMili: z.number(),
      price: z.number().default(0),
    })

    const { productId, weightMili, price } = bodySchema.parse(req.body)

    try {
      const weight = await prisma.weight.create({
        data: { productId, weightMili, price },
      })

      return weight
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.put('/weight/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    const bodySchema = z.object({
      productId: z.string().uuid(),
      weightMili: z.number(),
      price: z.number().default(0),
    })

    const { productId, weightMili, price } = bodySchema.parse(req.body)

    try {
      const weight = await prisma.weight.update({
        where: { id },
        data: { productId, weightMili, price },
      })

      return weight
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.delete('/weight/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    await prisma.weight.delete({
      where: { id },
    })
  })
}

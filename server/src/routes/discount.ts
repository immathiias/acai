import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function discountRoutes(app: FastifyInstance) {
  app.get('/discount', async () => {
    const discount = await prisma.discount.findMany()

    return discount
  })

  app.get('/discount/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    try {
      const discount = await prisma.discount.findUniqueOrThrow({
        where: { id },
      })

      return discount
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.post('/discount', async (req) => {
    const bodySchema = z.object({
      productId: z.string().uuid(),
      name: z.string(),
      desc: z.string().default(''),
      percent: z.number(),
    })

    const { productId, name, desc, percent } = bodySchema.parse(req.body)

    try {
      const discount = await prisma.discount.create({
        data: { productId, name, desc, percent },
      })

      return discount
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.put('/discount/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    const bodySchema = z.object({
      productId: z.string().uuid(),
      name: z.string(),
      desc: z.string().default(''),
      percent: z.number(),
    })

    const { productId, name, desc, percent } = bodySchema.parse(req.body)

    try {
      const discount = await prisma.discount.update({
        where: { id },
        data: { productId, name, desc, percent },
      })

      return discount
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.delete('/discount/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    await prisma.discount.delete({
      where: { id },
    })
  })
}

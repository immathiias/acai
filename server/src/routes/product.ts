import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function productRoutes(app: FastifyInstance) {
  app.get('/product', async () => {
    const products = await prisma.product.findMany()

    return products
  })

  app.get('/product/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    try {
      const product = await prisma.product.findUniqueOrThrow({
        where: { id },
        include: {
          weights: true,
          additionals: true,
          discount: true,
        },
      })

      return product
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.post('/product', async (req) => {
    const bodySchema = z.object({
      categoryId: z.string().uuid(),
      name: z.string(),
      desc: z.string().default(''),
      price: z.number().default(0),
    })

    const { categoryId, name, desc, price } = bodySchema.parse(req.body)

    try {
      const product = await prisma.product.create({
        data: { categoryId, name, desc, price },
      })

      return product
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.put('/product/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    const bodySchema = z.object({
      categoryId: z.string().uuid(),
      name: z.string(),
      desc: z.string().default(''),
      price: z.number().default(0),
    })

    const { categoryId, name, desc, price } = bodySchema.parse(req.body)

    try {
      const product = await prisma.product.update({
        where: { id },
        data: { categoryId, name, desc, price },
      })

      return product
    } catch (error) {
      console.log(`Erro! ${error}`)
    }
  })

  app.delete('/product/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    await prisma.product.delete({
      where: { id },
    })
  })
}

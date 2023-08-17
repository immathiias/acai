import fastify from 'fastify'
import cors from '@fastify/cors'

import { categoryRoutes } from './routes/category'
import { productRoutes } from './routes/product'
import { weightRoutes } from './routes/weight'
import { additionalRoutes } from './routes/additional'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(categoryRoutes)
app.register(productRoutes)
app.register(weightRoutes)
app.register(additionalRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Servidor iniciado em http://localhost:3333')
  })

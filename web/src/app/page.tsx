import { Copyright } from '@/components/Copyright'
import Header from '@/components/Header'
import Product from '@/components/Product'
import Welcome from '@/components/Welcome'

import { api } from '@/lib/api'
import { ProductType } from '@/types/Product'

export default async function Home() {
  const response = await api.get('/product')
  const products: ProductType[] = response.data

  return (
    <>
      <Header />

      <main className="flex w-full flex-col gap-8">
        <section className="welcome w-full">
          <div className="flex h-full items-start justify-start px-6 pt-12">
            <Welcome />
          </div>
        </section>

        <section className="flex flex-col gap-6 px-6">
          <h2 className="text-3xl font-bold text-zinc-200">
            Conheça alguns dos nossos produtos
          </h2>

          <div className="flex flex-wrap items-center justify-evenly gap-6 pt-2">
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                categoryId={product.categoryId}
                name={product.name}
                desc={product.desc}
                weights={product.weights}
                solds={product.solds}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="pt-12">
        <Copyright />
      </footer>
    </>
  )
}

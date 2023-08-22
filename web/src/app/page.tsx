import { Copyright } from '@/components/Copyright'
import Header from '@/components/Header'
import Welcome from '@/components/Welcome'

export default function Home() {
  return (
    <main className="grid min-h-screen">
      <div className="w-full">
        <Header />
      </div>

      <div className="welcome">
        <div className="absolute mt-24 flex h-full items-start justify-start px-6">
          <Welcome />
        </div>
      </div>

      <div className="mt-16 grid items-center gap-6 px-6">
        <h2 className="text-3xl font-bold text-zinc-200">
          Conheça alguns dos nossos produtos
        </h2>
      </div>

      <footer className="px-6">
        <Copyright />
      </footer>
    </main>
  )
}

import Link from 'next/link'
import { FaTiktok } from 'react-icons/fa'
import { GrInstagram, GrTwitter } from 'react-icons/gr'

export default function Welcome() {
  return (
    <div className="grid">
      <div className="max-w-[460px] space-y-1">
        <h1 className="shadow-text font-sans text-4xl font-bold leading-tight text-white">
          Seja bem-vindo a AM Açaiteria!
        </h1>
        <p className="shadow-text text-lg font-bold leading-relaxed text-zinc-200">
          Peça seu açaí pelo site e tenha vários descontos exclusivos.
        </p>
      </div>

      <div className="mt-12">
        <p className="shadow-text-2 font-montserrat text-lg text-white">
          Siga a gente nas redes sociais
        </p>
        <div className="mt-2 flex flex-col items-start gap-2">
          <div className="flex items-center gap-4">
            <Link
              className="cursor-pointer text-white transition duration-300 hover:-translate-y-1 hover:opacity-80"
              href={'https://instagram.com'}
              target="_blank"
            >
              <GrInstagram className="h-7 w-7" />
            </Link>

            <Link
              className="cursor-pointer text-white transition duration-300 hover:-translate-y-1 hover:opacity-80"
              href={'https://twitter.com'}
              target="_blank"
            >
              <GrTwitter className="h-7 w-7" />
            </Link>

            <Link
              className="cursor-pointer text-white transition duration-300 hover:-translate-y-1 hover:opacity-80"
              href={'https://tiktok.com'}
              target="_blank"
            >
              <FaTiktok className="h-7 w-7" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

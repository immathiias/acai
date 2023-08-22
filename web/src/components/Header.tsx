import Image from 'next/image'
import AcaiLogo from '@/assets/acai-logo.png'
import NavButtons from './NavButtons'
import Search from './Search'
import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'

export default function Header() {
  return (
    <header className="flex w-full flex-col items-center bg-violet-900 shadow-sm shadow-zinc-950">
      <div className="flex h-auto w-full flex-col items-center justify-between bg-violet-700 px-6 py-2 sm:flex-row">
        <button className="flex items-center gap-1">
          <FaWhatsapp className="h-5 w-5 text-zinc-200" />
          <span className="text-sm font-bold text-zinc-200">
            (13) 9 9999-8888
          </span>
        </button>

        <button className="flex items-center gap-1">
          <MdOutlineEmail className="h-5 w-5 text-zinc-200" />
          <span className="text-sm font-bold text-zinc-200">
            am-acaiteria@email.com
          </span>
        </button>
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-5 px-6 pt-4 sm:flex-row">
        <div className="">
          <Image
            src={AcaiLogo}
            className="h-auto w-52"
            alt="Logo da açaiteria"
          />
        </div>
        <div className="">
          <Search />
        </div>

        <div className="flex items-center justify-center gap-4">
          <button className="flex items-center gap-1 rounded bg-zinc-200 px-2 py-1 font-bold text-violet-950">
            <FcGoogle className="h-5 w-5" /> <span>Entrar com Google</span>
          </button>
        </div>
      </div>

      <div className="mt-4 flex w-full flex-col">
        <nav className="flex flex-col items-center justify-between gap-5 py-2 sm:flex-row sm:items-end">
          <ul className="flex items-start justify-between">
            <li>
              <NavButtons name="Início" href="/" />
            </li>
            <li>
              <NavButtons name="Produtos" href="/" />
            </li>
            <li>
              <NavButtons name="Categorias" href="/" />
            </li>
            <li>
              <NavButtons name="Sobre" href="/" />
            </li>
          </ul>
        </nav>

        <div className="h-1 w-full bg-zinc-950" />
      </div>
    </header>
  )
}

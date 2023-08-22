import { Buttons } from '@/interfaces/Button'
import Link from 'next/link'

export default function NavButtons(props: Buttons) {
  return (
    <Link
      href={props.href}
      className="cursor-pointer p-3 font-montserrat text-zinc-200 transition duration-300 hover:bg-zinc-950"
    >
      {props.name}
    </Link>
  )
}

import { FiSearch } from 'react-icons/fi'

export default function Search() {
  return (
    <div className="relative flex w-[240px] items-center justify-center md:w-[300px]">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Buscar"
        className="w-full rounded-full border-2 border-violet-900 bg-violet-950 bg-opacity-80 px-4 py-1 pr-8 text-zinc-200 outline-none transition duration-300 focus:border-violet-700"
      />
      <button className="absolute right-2">
        <FiSearch className="h-5 w-5 text-zinc-200" />
      </button>
    </div>
  )
}

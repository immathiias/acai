'use client'

import { ProductType } from '@/types/Product'
import Image from 'next/image'

import AcaiImage from '@/assets/dois-acai.png'
import formatMoney from '@/utils/Formatter'

export default function Product(props: ProductType) {
  return (
    <div className="productHv flex max-w-[280px] flex-col justify-center rounded-md border-2 border-violet-700 p-3">
      <Image src={AcaiImage} alt="Açaí" className="flyerImg" />

      <div>
        <h2 className="text-2xl font-bold text-zinc-200 ">{props.name}</h2>
        <p className="max-w-[240px] tracking-wide text-zinc-300">
          {props.desc}
        </p>
      </div>

      <div className="mt-2 h-[2px] w-full rounded bg-violet-700" />

      {props.weights?.length !== undefined && (
        <div className="flex flex-col gap-1 pt-2">
          <p className="text-lg font-bold text-zinc-200">Tamanhos</p>

          <div className="flex flex-col">
            {props.weights?.map((weight) => (
              <div key={weight.id} className="rounded-md font-bold">
                <div className="flex justify-between text-zinc-200">
                  <p>{weight.weightMili}ml</p>
                  <p>{formatMoney().format(parseFloat(weight.price))}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button className="mt-4 rounded-md bg-violet-700 px-3 py-2 text-base font-bold text-zinc-200 transition duration-300 hover:bg-opacity-80">
        Peça o seu aqui!
      </button>
    </div>
  )
}

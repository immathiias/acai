import { Weight } from './Weights'

export type ProductType = {
  id: string
  categoryId: string
  name: string
  desc: string
  price?: string
  solds: number
  weights?: Weight[]
}

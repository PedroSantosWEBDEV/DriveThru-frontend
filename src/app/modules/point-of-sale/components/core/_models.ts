import {ID, Response} from '../../../../../_metronic/helpers'
export type Product = {
  id?: ID
  avatar?: string
}


export type ProductQueryResponse = Response<Array<Product>>

export const initialClient: Product = {
  id: 0,
  avatar: "",
}
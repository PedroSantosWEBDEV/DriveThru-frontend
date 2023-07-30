import axios, {AxiosResponse} from 'axios'
import {ID} from '../../../../../_metronic/helpers'
import { Product, ProductQueryResponse } from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const CLIENT_URL = `${API_URL}/api/clientes`
const GET_CLIENTS_URL = `${API_URL}/api/clientes`

const getProducts = (query: string): Promise<ProductQueryResponse> => {
  return axios
    .get(`${GET_CLIENTS_URL}?${query}`)
    .then((d: AxiosResponse<ProductQueryResponse>) => d.data)
}

const getEmailValid = (Product: Product): Promise<ProductQueryResponse> => {
  return axios
    .post(`${CLIENT_URL}/verify_email`, Product)
    .then((response: AxiosResponse<ProductQueryResponse>) => response.data)
}

const getClientById = (id: ID): Promise<ProductQueryResponse> => {
  return axios
    .get(`${CLIENT_URL}/${id}`)
    .then((response: AxiosResponse<ProductQueryResponse>) => response.data)
}

const createClient = (Product: Product): Promise<ProductQueryResponse> => {
  return axios
    .post(`${CLIENT_URL}/novo`, Product)
    .then((response: AxiosResponse<ProductQueryResponse>) => response.data)
}

const updateClient = (Product: Product): Promise<ProductQueryResponse> => {
  return axios
    .put(`${CLIENT_URL}/${Product.id}/editar`, Product)
    .then((response: AxiosResponse<ProductQueryResponse>) => response.data)
}

const deleteClient = (clientId: ID): Promise<void> => {
  return axios.delete(`${CLIENT_URL}/${clientId}/excluir`).then(() => {})
}

const deleteSelectedClients = (clientIds: Array<ID>): Promise<void> => {
  const requests = clientIds.map((id) => axios.delete(`${CLIENT_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getProducts, deleteClient, deleteSelectedClients,getEmailValid,getClientById, createClient, updateClient}

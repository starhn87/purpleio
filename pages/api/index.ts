import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:9000',
})

export const getList = () => api.get('/stores')

export const getDetail = (id: number) => api.get(`/stores/${id}`)

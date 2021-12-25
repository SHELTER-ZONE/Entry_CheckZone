import axios from 'axios'
// import configuration from '@/configuration'

export const api = axios.create({
  baseURL: 'https://sz-entry-check.deta.dev',
})

api.interceptors.request.use(async (config) => {
  return config
})

const handleSuccessRes = (response) => {
  return [response.data, null]
}

const handleErrorRes = (error) => {
  return [null, error.response.data.msg || error]
}

api.interceptors.response.use(handleSuccessRes, handleErrorRes)
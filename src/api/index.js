import { api } from "./instance"


export const encode = async({
  country,
  id,
  source,
  ip,
}) => {
  return await api({
    method: 'post',
    url: '/encode',
    data: {
      country,
      id,
      source,
      ip,
    }
  })
}



import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then((response) => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then((response) => response.data)
}

const deleteTarget = (id, deletedObject) => {
  const request = axios.delete(`${baseUrl}/${id}`, deletedObject)
  return request.then((response) => response.data)
}

const numberService = { getAll, create, update, deleteTarget }

export default numberService

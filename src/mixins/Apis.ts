import axios from 'axios'
import { showToast, POSITION } from './Hubs'

const URL = 'https://salsabackend-production.up.railway.app'

export const apiGet = async (url: string) => {
  try {
    const response = await axios.get(`${URL}${url}`, {
      headers: {
        'Content-Type': 'application/json'
        //'Access-Control-Allow-Origin': ''
        //token: 'token'
      }
    })
    return response.data
  } catch (error) {
    showToast(
      'Ha ocurrido un error al cargar los datos: ' + error,
      'error',
      4000,
      POSITION.BOTTOM_RIGHT
    )
    throw error
  }
}

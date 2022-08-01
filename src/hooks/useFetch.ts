import axios from 'axios'

export async function useFetch(url: string) {
  return axios.get(url)
      .then(resp => resp.data)
      .catch(e => console.log(e))
}
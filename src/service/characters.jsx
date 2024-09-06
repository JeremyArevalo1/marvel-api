import CryptoJS from "crypto-js"

const time_stamp = new Date().getTime()
const private_api_key = '9a36a0e05164b37fc8c89f3ff45936bd71ff6376'
const public_api_key = '2e737a65cc7cae2fd0300b354eca14d3'

const hash = CryptoJS.MD5(time_stamp + private_api_key + public_api_key).toString()


export const reqCharacter = async (page = 1, limit = 20, searchMrv = '') => {
  const offset = (page - 1) * limit
  let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}&limit=${limit}&limit=${limit}`
  if (searchMrv) {
    url += `&nameStartsWith=${encodeURIComponent(searchMrv)}`
  }
  const resp = await fetch(url)
  const { data } = await resp.json()

  return data || { results: [], total: 0, limit: 20 }
}

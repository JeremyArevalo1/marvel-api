import CryptoJS from "crypto-js"

const time_stamp = new Date().getTime()
  const private_api_key = '9a36a0e05164b37fc8c89f3ff45936bd71ff6376'
  const public_api_key= '2e737a65cc7cae2fd0300b354eca14d3'

  const hash = CryptoJS.MD5(time_stamp + private_api_key + public_api_key).toString()


  export const reqCharacter = async () => {
    const resp = await fetch (`https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}`)
    const {data} = await resp.json()
    
    return data
  }

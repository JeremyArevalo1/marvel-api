import { useEffect, useState } from "react"
import { reqCharacter } from "../service/characters"




export const useCharacters = () => {
    const [characters, setCharacter] = useState()

  
  
  
  useEffect(() => {
    
    reqCharacter().then((data) => {
        setCharacter(data.results)
    })
    
  
    
  }, [])


  return {
    characters,
  }
}

import { useEffect, useState } from "react"
import { reqCharacter } from "../service/characters"




export const useCharacters = () => {
    const [characters, setCharacter] = useState()

    useEffect(() => {

        reqCharacter().then((data) => {
            setCharacter(data.results)
        })
    }, [])

    const handleMarvel = async (categoria, e) =>{
        e.preventDefault()
        try {
            const data = await reqCharacter(categoria)
            setCharacter(data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }



    return {
        characters, handleMarvel
    }
}

import { useEffect, useState } from "react"
import { reqCharacter } from "../service/characters"

export const useCharacters = (page, searchMrv) => {
    const [characters, setCharacters] = useState()
    const [pag, setPag] = useState(1)

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await reqCharacter(page, 20, searchMrv)
                setCharacters(data.results || [])
                setPag(Math.ceil(data.total / 20))
            } catch (error) {
                console.error('Error fetching characters:', error)
                setCharacters([])
                setPag(1)
            }
        }
        fetchCharacters()
    }, [page, searchMrv])


    return {
        characters,
        pag
    }
}
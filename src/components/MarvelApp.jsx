import Pagination from '@mui/material/Pagination';
import { useCharacters } from "../hooks/useCharacters"
import { GridCharacters } from "./GridCharacters"


export const MarvelApp = () => {
  
  
  //console.log(characters)
  const {characters} = useCharacters()
  return (
    <>
          <GridCharacters characters={characters}/>
          <Pagination count={10} onChange={(e, value) => console.log(value)}/>

    </>
  )
}

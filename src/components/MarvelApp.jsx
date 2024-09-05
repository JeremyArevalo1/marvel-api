import Pagination from '@mui/material/Pagination';
import { useCharacters } from "../hooks/useCharacters"
import { GridCharacters } from "./GridCharacters"
import { BuscarMarvel } from './BucarMarvel';


export const MarvelApp = () => {
  const {handleMarvel} = useCharacters()
  const {characters} = useCharacters()
  return (
    <>
          <BuscarMarvel handleMarvel={handleMarvel}/>
          <GridCharacters characters={characters}/>
          <Pagination count={10} onChange={(e, value) => console.log(value)}/>

    </>
  )
}

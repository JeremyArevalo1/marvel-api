import Pagination from '@mui/material/Pagination';
import { useCharacters } from "../hooks/useCharacters"
import { GridCharacters } from "./GridCharacters"
import { BuscarMarvel } from './BucarMarvel';
import { useState } from 'react';


export const MarvelApp = () => {
  const [page, setPage] = useState(1)
  const {characters, pag } = useCharacters(page)


  const handlePageChange = (event, value) => {
    setPage(value)
  }


  return (
    <>
          <GridCharacters characters={characters}/>
          <Pagination className='position-absolute start-50' count={pag} page={page} onChange={handlePageChange} />

    </>
  )
}

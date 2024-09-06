import Pagination from '@mui/material/Pagination';
import { useCharacters } from "../hooks/useCharacters"
import { GridCharacters } from "./GridCharacters"
import { BuscarMarvel } from './BucarMarvel';
import { useState } from 'react';


export const MarvelApp = () => {
  const [page, setPage] = useState(1)
  const [searchMrv, setSearchMrv] = useState('')
  const { characters, pag } = useCharacters(page, searchMrv)


  const handlePageChange = (event, value) => {
    setPage(value)
  }


  const handleSearch = (term) => {
    setSearchMrv(term)
    setPage(1)
  }

  return (
    <>
      <div className='container d-flex flex-row justify-content-center align-items-center mt-3 w-50'>
        <BuscarMarvel handleMarvel={handleSearch} />
      </div>
      <GridCharacters characters={characters} />
      <Pagination className='d-flex justify-content-center mt-4' count={pag} page={page} onChange={handlePageChange} />

    </>
  )
}

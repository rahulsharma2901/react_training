import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {
    const [searchParams, setSearchParams] = useSearchParams()
    const handleSearch = (e) => {
        e.preventDefault()
        const data = (searchParams.get('q'))
        alert(data);
    }
  return (
    <div>
        <h1>This is the search page</h1>
        <button onClick={() => setSearchParams({q:"Rahul"})}>Show all Users</button>
        <form onSubmit={handleSearch}>
            <label htmlFor=''>Search</label>
            <input type='text' placeholder='Search' onChange={(e) =>setSearchParams({q:e.target.value})}/>
            <br/><br/>
            <input type='submit' value='Search' />
            <button type='button' value="Reset" onClick={() => setSearchParams({})}>Reset</button><br/><br/>

        </form>
    </div>
  )
}

export default Search

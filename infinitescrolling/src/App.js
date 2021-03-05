import React, { useState } from 'react';
import useBookSearch from './useBookSearch';


function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setpageNumber] = useState(1)

  function handleSearch(e) {
    setQuery(e.target.value)
    setpageNumber(1)
  }

  const {
    books,
    hasMore,
    loading,
    error
  } = useBookSearch(query, pageNumber)
  return (
    <>
      <input type="text" onChange={handleSearch} />
      {books.map(book => {
        return <div key={book}>{book}</div>
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error...'}</div>
    </>
  );
}

export default App;

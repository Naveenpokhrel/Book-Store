import React from 'react'
import SearchAndFilter from './SearchandFilter'

const Book = () => {
  return (
    <div>
      <div className='text-center mt-15 space-y-4'>
        <h2 className='text-4xl'>Literary Universe</h2>
        <p>Dive into a world of stories, knowledge, and imagination with our curated collection of books. </p>
        <SearchAndFilter />
      </div>
    </div>
  )
}

export default Book
import React from 'react'

function Input() {
  return (
    <input
      className='lg:h-14 lg:w-108 h-12 w-72 border-2 border-mainColor lg:rounded-l-md lg:rounded-r-none md:rounded-l-md md:rounded-r-none rounded-l-md rounded-r-md bg-transparent px-4'
      placeholder='Enter your link to be shorten'
    />
  );
}

export default Input;

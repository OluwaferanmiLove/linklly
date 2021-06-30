import React from 'react'

function Input({name, type, onChange, placeholder}) {
  return (
    <input
      className='lg:h-14 lg:w-108 h-12 w-72 border-2 text-gray-600 border-mainColor lg:rounded-l-md lg:rounded-r-none md:rounded-l-md md:rounded-r-none rounded-l-md rounded-r-md bg-transparent px-4 outline-none focus:border-mainColor-100'
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
    />
  );
}

export default Input;

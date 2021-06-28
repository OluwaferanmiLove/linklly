import React from 'react'

function Button({ styles, rounded_r_md, rounded_l_md, rounded_md, title, type, loading }) {
  const style = `
    lg:h-14
    lg:w-36
    lg:max-w-lg
    lg:rounded-r-md
    lg:rounded-l-none
    md:rounded-r-md
    md:rounded-l-none
    ${rounded_r_md && 'lg:rounded-r-md'}
    ${rounded_l_md && 'lg:rounded-l-md'}
    ${rounded_md && 'lg:rounded-md'}
    h-12
    w-36
    rounded-r-md
    rounded-l-md
    ${rounded_r_md && 'rounded-r-md'}
    ${rounded_l_md && 'rounded-l-md'}
    ${rounded_md && 'rounded-md'}
    cursor-pointer
  `
  return (
    loading ?
    <div className={`${styles} ${style} bg-mainColor relative flex justify-center items-center`}>
      <div class="inline-block animate-spin ease duration-300 w-2 h-2 bg-white mx-1"></div>
      <div class="inline-block animate-ping ease duration-300 w-2 h-2 bg-white mx-1"></div>
      <div class="inline-block animate-pulse ease duration-300 w-2 h-2 bg-white mx-1"></div>
      <div class="inline-block animate-bounce ease duration-300 w-2 h-2 bg-white mx-1"></div>
    </div> :
    <input className={`${styles} ${style} text-white font-gilroy-light bg-mainColor outline-none`} value={title} type={type} />
  );
}

export default Button;

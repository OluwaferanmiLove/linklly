import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

function Navbar({focus}) {
  let focusStyles = 'text-mainColor';
  let homeFocus = focus === 'home' && focusStyles;
  // let analyticsFocus = focus === 'analytics' && focusStyles;
  return (
    <div className='flex w-full items-center justify-center fixed top-0 left-0 right-0 bg-mainBg'>
      <div className='flex w-baseWidth max-w-baseWidth items-center justify-between py-3 top-0 left-0 right-0'>
        <img src={logo} alt='logo' />
        <div className='flex items-center'>
          <p className={`${homeFocus} text-mainColor-100 text-lg font-gilroy-medium px-5`}>
            <Link to={'/'}>Home</Link>
          </p>
          {/* <p className={`${analyticsFocus} text-mainColor-100 text-lg font-gilroy-medium px-5`}>
            <Link to={'/analytics'}>Analytics</Link>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

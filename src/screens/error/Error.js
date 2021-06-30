import React from 'react';
import Navbar from '../../components/Navbar';

function Error() {
  return (
    <div className='flex items-center justify-center bg-mainBg'>
      <div className="flex flex-col h-screen w-screen overflow-hidden max-w-7xl lg:px-20">
        <Navbar />
        <div className="flex flex-col items-center flex-1 lg:px-32 md:px-28 px-5">
          <header className="flex flex-1 flex-col items-center justify-center">
            <h1 className='lg:leading-lg leading-8 lg:text-7xl md:text-7xl text-5xl font-gilroy-bold text-center text-gray-500'>
              <span className='text-mainColor'>Sorry!!!</span> something went wrong.
            </h1>
            <div className='mt-8'>
              <p className='lg:leading-8 leading-6 lg:text-lg md:text-lg text-sm lg:px-10 font-gilroy-medium text-center text-gray-500'>
                You can try and visit the link later.
              </p>
            </div>
          </header>
        </div>
        <div className='flex w-full items-center justify-center py-2 px-5'>
          <p className='lg:leading-8 leading-6 lg:text-base md:text-base text-xs lg:px-10 font-gilroy-light text-center text-gray-500'>
            design and developed by Oluwaferanmilove and Faith Oluwadara
          </p>
        </div>
      </div>
    </div>
  );
}

export default Error;

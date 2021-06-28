import React from 'react';
import './home.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import {detectBrowser, detectOs} from '../../services/screen.service'

function Home() {
  const [loading, setLoading]  = React.useState(false);
  const [os, setOs]  = React.useState(false);
  const [os2, setOs2]  = React.useState(false);

  React.useEffect(() => {
    setOs(detectOs())
    setOs2(detectBrowser())
  }, [])

  const handleShorten = e => {
    e.preventDefault();
    setLoading(true)
    alert('You have submitted the form.')
  }

  return (
    <div className='flex items-center justify-center bg-mainBg'>
      <div className="flex flex-col items-center justify-center h-screen w-screen overflow-hidden max-w-7xl lg:px-20">
        <Navbar />
        <header className="flex flex-col flex-1 items-center justify-center lg:px-32 md:px-28 px-5">
          <h1 className='lg:leading-lg leading-8 lg:text-5xl md:text-3xl text-2xl font-gilroy-bold lg:text-center md:text-center text-left text-gray-500'>
            Shorten your <span className='text-mainColor'>url</span> in one click, share link, and <span className='text-mainColor'>engage</span> more <span className='text-mainColor'>audience</span>.
          </h1>
          <h1 className='lg:leading-lg leading-8 lg:text-5xl md:text-3xl text-2xl font-gilroy-bold lg:text-center md:text-center text-left text-gray-500'>
            <span className='text-mainColor'>{os}</span>
            <span className='text-mainColor'>{os2}</span>
          </h1>
          <div className='lg:mt-8 md:mt-6 mt-8 lg:px-52 md:px-12'>
            <p className='lg:leading-8 leading-6 lg:text-lg md:text-lg text-sm lg:px-10 lg:pr-0 pr-10 font-gilroy-medium lg:text-center md:text-center text-left text-gray-500'>
              Engage more audience by shorten the your url, making it easier to share and increase your audience.
            </p>
            <form onSubmit={handleShorten}>
              <div className='flex row lg:flex-nowrap md:flex-wrap flex-wrap lg:mt-16 mt-12'>
                <Input />
                <Button rounded_r_md styles={'lg:mt-0 md:mt-0 mt-6'} title={'Shorten Url'} type={'submit'} loading={loading}  />
              </div>
            </form>
          </div>
        </header>
        <div className='flex w-full items-center justify-center py-2 px-5 absolute bottom-0'>
          <p className='lg:leading-8 leading-6 lg:text-base md:text-base text-xs lg:px-10 font-gilroy-light lg:text-center md:text-center text-left text-gray-500'>
            design and developed by Oluwaferanmilove and Faith Oluwadara
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import './home.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
// import {detectBrowser, detectOs} from '../../services/screen.service'
import { linkService } from '../../services/link.service';
import swal from 'sweetalert';
import { validateUrl } from '../../services/validation.service';

function Home() {
  const [loading, setLoading]  = React.useState(false);
  // const [os, setOs]  = React.useState(false);
  // const [os2, setOs2]  = React.useState(false);
  const [link, setLink]  = React.useState();
  const [linkError, setLinkError]  = React.useState(null);
  const [linkResponse, setLinkResponse]  = React.useState({});

  // React.useEffect(() => {
  //   setOs(detectOs())
  //   setOs2(detectBrowser())
  // }, [])

  const handleTextChange = (e) => {
    console.log(e.target.value)
    setLink(e.target.value)
  }

  const handleShorten = e => {
    e.preventDefault();

    if (validateUrl(link) === false) {
      setLinkError('Please enter a valid Url/link');
      return;
    } else {
      setLinkError(null)
    }

    setLoading(true)
    let data = {
      link,
    };
    
    linkService.shortenLink(data)
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          setLinkResponse(response.data.response)
        } else if (response.status === 500) {
          console.log(`response 500: ${response.data}`)
          swal()
        } else {
          console.log(`response others: ${response.data}`)
        }
      })
      .catch((error) => {
        setLoading(false);
      })
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
          </h1>
          <div className='lg:mt-8 md:mt-6 mt-8 lg:px-52 md:px-12'>
            <p className='lg:leading-8 leading-6 lg:text-lg md:text-lg text-sm lg:px-10 lg:pr-0 pr-10 font-gilroy-medium lg:text-center md:text-center text-left text-gray-500'>
              Engage more audience by shorten the your url, making it easier to share and increase your audience.
            </p>
            <form onSubmit={handleShorten}>
              <div className='flex row lg:flex-nowrap md:flex-wrap flex-wrap lg:mt-16 mt-12'>
                <Input name={'id'} placeholder={'Enter your link to be shorten'} onChange={handleTextChange} />
                <Button rounded_r_md styles={'lg:mt-0 md:mt-0 mt-6'} title={'Shorten Url'} type={'submit'} loading={loading}  />
              </div>
              {linkError && <div>
                <p className='lg:leading-8 leading-6 lg:text-base md:text-base text-xs font-gilroy-light lg:text-center md:text-center text-left text-red-800'>
                  {linkError}
                </p>
              </div>}
            </form>
          </div>
          {linkResponse.shortedLink && <div className='flex row items-center justify-center lg:mt-10 mt-4 lg:h-10 lg:w-72 h-12 w-72 border border-mainColor-100 rounded-md bg-transparent px-4'>
            <p className='lg:leading-8 leading-6 lg:text-base md:text-base text-xs lg:px-10 font-gilroy-medium text-left text-gray-500 truncate'>
              {window.location.hostname}/{linkResponse.shortedLink}
            </p>
          </div>}
        </header>
        <div className='flex w-full items-center justify-center py-2 px-5 fixed bottom-0'>
          <p className='lg:leading-8 leading-6 lg:text-base md:text-base text-xs lg:px-10 font-gilroy-light lg:text-center md:text-center text-left text-gray-500'>
            design and developed by Oluwaferanmilove and Faith Oluwadara
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

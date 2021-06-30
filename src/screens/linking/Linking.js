import React from 'react';
import {detectBrowser, detectOs} from '../../services/screen.service'
import { linkService } from '../../services/link.service';
import logo from '../../assets/images/logo.svg';
// import swal from 'sweetalert';
// import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';

function Linking() {
  let { id } = useParams();

  React.useEffect(() => {
  }, [])

  React.useEffect(() => {
    let data = {
      id,
      country: 'USA',
      system: detectOs(),
      browser: detectBrowser(),
    }
    console.log(data)
    linkService.getFullLink(data)
      .then((response) => {
        if (response.status === 200) {
          window.location.href = response.data.originalLink;
        } else if (response.status === 500) {
          console.log(`response 500: ${response.data}`)
        } else if (response.status === 404) {
          window.location.pathname = '/404';
        }else {
          console.log(`response others: ${response.data}`)
          window.location.pathname = '/error';
        }
      })
  }, [ id ])


  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
      {/* <Helmet>
        <title>test</title>
      </Helmet> */}
      <div className={`flex justify-center items-center`}>
        <div className="inline-block animate-spin ease duration-300 w-6 h-6 bg-mainColor mx-1"></div>
        <div className="inline-block animate-ping ease duration-300 w-6 h-6 bg-mainColor mx-1"></div>
        <div className="inline-block animate-pulse ease duration-300 w-6 h-6 bg-mainColor mx-1"></div>
        <div className="inline-block animate-bounce ease duration-300 w-6 h-6 bg-mainColor mx-1"></div>
      </div>
      <div className='mt-8'>
        <img src={logo} alt='logo' />
      </div>
    </div>
  );
}

export default Linking;

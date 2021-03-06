import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import { linkService } from '../../services/link.service';

function Analytics() {
  const [loading, setLoading]  = React.useState(false);
  const [showForm, setShowForm] = React.useState(true);
  const [id, setId] = React.useState();
  const [analytics, setAnalytics] = React.useState(true);

  const handleTextChange = (e) => {
    console.log(e.target.value)
    setId(e.target.value)
  }

  const handleAnalytics = e => {
    e.preventDefault();
    setLoading(true);
    let data = {
      id,
    };

    linkService.getAnalytics(data)
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          setAnalytics(response.data.response);
          console.log(response)
          setShowForm(false)
        } else if (response.status === 500) {
          console.log(`response 500: ${response.data}`)
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
      <div className="flex flex-col h-screen w-screen overflow-hidden max-w-7xl lg:px-20">
        <Navbar />
        <div className="flex flex-col items-center flex-1 lg:px-32 md:px-28 px-5 mt-24">
          <header className="flex flex-col items-center justify-center">
            <h1 className='lg:leading-lg leading-8 lg:text-5xl md:text-3xl text-2xl font-gilroy-bold text-center text-gray-500'>
              Url <span className='text-mainColor'>Analytics</span>.
            </h1>
            <div className='mt-2'>
              <p className='lg:leading-8 leading-6 lg:text-lg md:text-lg text-sm lg:px-10 font-gilroy-medium text-center text-gray-500'>
              Enter the shortened link to id view analytics e.g. '2LKUOLgP'.
              </p>
            </div>
          </header>
          {showForm && <form onSubmit={handleAnalytics}>
            <div className='flex row items-center justify-center lg:flex-nowrap flex-wrap lg:mt-12 mt-6'>
              <Input placeholder={'Enter the shortened link id'} onChange={handleTextChange} />
              <Button rounded_r_md styles={'lg:mt-0 mt-6'} title={'Check analytics'} type={'submit'} loading={loading}  />
            </div>
          </form>}
          <p>{analytics}</p>
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

export default Analytics;

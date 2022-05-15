import type { NextPage } from 'next'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Steps from '../components/Steps'
import Chart from '../components/Chart'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
     <Header/>
     <div className=''>
       <Banner/>
      </div>
     <div className='mt-20'>
       <Steps/>
     </div>
     <div className='w-1/2 mt-20'>
      <Chart/>
     </div>
    </div>
  )
}

export default Home

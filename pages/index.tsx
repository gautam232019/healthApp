import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
     <Header/>
     <div className='mt-10'>
       {/* <Banner/> */}
     <div className='mt-20'>
       {/* <Steps/> */}
     </div>
     </div>
    </div>
  )
}

export default Home

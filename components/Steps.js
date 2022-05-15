import React,{useState} from 'react'
import TrendingCard from './TrendingCard'
import ReactSwitch from 'react-switch'
// import S2 from '../assets/s2'
import s3 from '../assets/s3.svg'
import s2 from '../assets/s2.svg'
import s4 from '../assets/s4.svg'

const Steps = () => {
    const [checked,setChecked] = useState(false)
    const styles ={
        trendingWrapper: `mx-7 p-5`,
        h1:`text-5xl text-white mt-4 p-2`,
        flexCenter:`flex justify-center align-center`
    }

    // const trendingData = [
    //     {
    //         number:1,
    //         data:"Connect your Wallet",
    //         name:"Bitcoin",
    //         icons: s3,
    //         isIncrement: true,
    //         rate:"2.34%",
    //     },
    //     {
    //         number:2,
    //         symbol:"USDT",
    //         name:"Tether",
    //         // icon:usdt,
    //         isIncrement: false,
    //         rate:"9.23%",
    //     },
    //     {
    //         number:3,
    //         symbol:"BTC",
    //         name:"Bitcoin",
    //         // icon:btc,
    //         isIncrement: true,
    //         rate:"2.34%",
    //     }
    // ]
  return (
    <div className='text-white'>
      <div className={styles.trendingWrapper}>
          <div className='flex justify-between'>
              <h1 className={styles.h1}>Make Your Health Card in 3 Easy Steps!</h1>
          </div>
          <br/>
          <div className='flex'>
              <p className='text-gray-400'>The Health Card doesnt Share your data with anyone &nbsp;</p>
              <span>
                  {/* <Rate isIncrement={true} rate='0.53%'/> */}
              </span>
               <span className='underline'>Read More</span>
          </div>
          <br/>
          
          <div className='flex justify-center w-full align-middle'>
              <TrendingCard
              title='Step 1'
              icon={s3}
              trendingData='Connect your wallet'
              />
              <TrendingCard
              title='Step 2'
              icon={s2}
              trendingData={'Fill Health Form'}
              />
              <TrendingCard
              title='Step 3'
              icon={s4}
              trendingData={'Pay Online and Complete Registration'}
              />
          </div>
      </div>
    </div>
  )
}

export default Steps
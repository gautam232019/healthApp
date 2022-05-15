import React from 'react'
import Image from 'next/image'
// import MoreButton from './MoreButton'
import TrendingCardRow from './TrendingCardRow'
const TrendingCard = ({title,icon,trendingData}) => {


  const styles = { 
    trendingCard: `mx-5 py-3 pb-0 bg-[#323546]
    rounded-xl text-white mr-3`,
    trendingCardWrapper: `flex items-center justify-between`
  }
console.log(trendingData)
  return (
    <div className={styles.trendingCard}>
        <div className={styles.trendingCardWrapper}>
            <div className='flex flex-col px-5 pt-5'>
                {icon && <Image src={icon} height={420} className='px-10' alt='icon' />}
                &nbsp;&nbsp;
                <p className='text-lg font-bold text-center'>{title}</p>
                <p className='pt-3 text-center font-white'>{trendingData}</p>
            </div>
            {/* <MoreButton/> */}
        </div>
        <br/>
        {/* {trendingData.map((item,index)=> {
          return(
            
            <TrendingCardRow
            key={index}
            number={item.number}
            symbol={item.symbol}
            name={item.name}
            icon={item.icon}
            isIncrement={item.isIncrement}
            rate={item.rate}
            />
          )
        })} */}
    </div>
  )
}

export default TrendingCard
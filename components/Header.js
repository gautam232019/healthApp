import React,{useState} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import { useMoralis } from "react-moralis";
import {toast, ToastContainer } from 'react-nextjs-toast'
import { ConnectButton } from 'web3uikit'
const Header = () => {
const router = useRouter()
const {Moralis} = useMoralis()
 
// const [user,setUser] = useState('');

const viewForm = () => {
    console.log(Moralis.account)
    if(Moralis.account){
    // setUser(Moralis.account.toString)
    router.push(
        `/form/healthForm/?address=${Moralis.account}`,
    )
    }
    else{
        toast.notify(`Please connect your wallet!`,{
            duration: 5,
            type: "error"
          })
    }
}

const styles = {
   header: `bg-[#17171A] text-white h-35 flex justify-center lg:gap-[40px] w-full pt-[30px] pb-[20px] px-10 `, 
   headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto
   px-5 mt-3`,
   nav: `flex justify-center items-center gap-[20px]`,
   navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
   navLink: `text-white flex mx-[10px]`,
   badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5
   right-0 top-1 ring-4`,
   inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
   input: `bg-transparent outline-none text-white w-70 ml-3`,
//    logo:`font-bold text-2xl text-white`,
}

  return (
      <div>
          <ToastContainer />
    <div className={styles.header}>
        <Image
        src='https://www.cowin.gov.in/assets/images/emblem-gov.svg'
        alt='logo'
        width={60}
        height={60}
        />
        <table className='mr-2 cursor-pointer hover:opacity-60'>
         <tr>   
        <div id='logo'>
            NHC
        </div>
        </tr>
        <tr>
        <div className='relative'>
          <div className='flex text-white'>Ministry of Health And Family Welfare</div>
        </div>
        </tr>
        </table>
        <div className={styles.headerWrapper}>
            <nav className={styles.nav}>
                <div className={styles.navItem}>
                    <div className={styles.navLink}>Health ID</div>
                    <div className={styles.badge}></div>
                </div>
                <div className={styles.navItem}>
                    <div className={styles.navLink}>Dashboard</div>
                    {/* <div className={styles.badge}></div> */}
                </div>
                <div className={styles.navItem}>
                    <div className={styles.navLink}>Verify Certificate</div>
                    <div className={styles.badge}></div>
                </div>
                <div className={styles.navItem}>
                    <div className={styles.navLink}>Faq</div>
                    <div className={styles.badge}></div>
                </div>
                <div className={styles.navItem}>
                    <div className={styles.navLink}>Partners</div>
                    {/* <div className={styles.badge}></div> */}
                </div>
                <div className='text-white flex mx-[60px] border-2 rounded-lg p-2 cursor-pointer hover:opacity-60' onClick={viewForm}>
                    <div className={styles.navLink}>Register for health card</div>
                    {/* <div className={styles.badge}></div> */}
                </div>
                {/* <div className={styles.navItem}>
                    <div className={styles.navLink}>Products</div>
                    <div className={styles.badge}></div>
                </div> */}
                {/* <div className={styles.navItem}>
                    <div className={styles.navLink}>Learn</div> */}
                    {/* <div className={styles.badge}></div> */}
                {/* </div> */}
                <ConnectButton/>
            </nav>

            <div className='flex items-center'>
                    {/* <ConnectButton/> */}
                {/* <div className={styles.inputContainer}> */}
                    {/* <Search/> */}
                    {/* <input className={styles.input} placeholder = 'Search'></input> */}
                {/* </div> */}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header
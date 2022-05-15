import React,{useState} from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image from 'next/image'
import ReactSwitch from 'react-switch'


const Banner = () => {

  const [checked,setChecked] = useState(false)
  const styles = {
    h1:`text-6xl text-white p-10`,
  }
  return(
    <div >
     <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={37}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <img src="https://www.cowin.gov.in/newmodibanner.8f8b11c701eae51c218a.jpg" alt='' width='100%' height='100%'/>
          </Slide>
          <Slide index={1}>
          <img src="https://prod-cdn.preprod.co-vin.in/assets/images/Corbevax-Vaccine-Banner-1.jpg" alt='' width='100%' height='100%'/>
          </Slide>
          <Slide index={2}>
          <img src="https://www.cowin.gov.in/precaution_dose.5f86ace736d3d39dd416.png" alt='' width='100%' height='100%'/>
          </Slide>
        </Slider>
        <div className='flex justify-center align-middle'>
        <ButtonBack>
        <div className='text-white flex mx-[60px] p-2 cursor-pointer hover:opacity-60'>
          Back
        </div>
        </ButtonBack>
        <ButtonNext>
        <div className='text-white flex mx-[60px] p-2 cursor-pointer hover:opacity-60'>
          Next
        </div>
        </ButtonNext>
        </div>
      </CarouselProvider>
  </div>
  )
}

export default Banner
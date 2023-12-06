import React, {useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'


import img from '../../asset/img.jpg'
import img2 from '../../asset/img (2).jpg'
import img3 from '../../asset/img (3).jpg'
import img4 from '../../asset/img (4).jpg'
import img5 from '../../asset/img (5).jpg'
import img6 from '../../asset/img (6).jpg'
import img7 from '../../asset/img (7).jpg'
import img8 from '../../asset/img (8).jpg'
import img9 from '../../asset/img (9).jpg'
import img10 from '../../asset/img (10).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

// let me paste the array named data

const Data = [
  {

    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location:'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora, nestled in the South Pacific and often hailed as a paradise on Earth, captivates with its pristine beauty and luxurious tranquility.' 

  },

   {
    id:2,
    imgSrc: img2,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora, nestled in the South Pacific and often hailed as a paradise on Earth, captivates with its pristine beauty and luxurious tranquility. '

  },

   {
    id:3,
    imgSrc: img3,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora, nestled in the South Pacific and often hailed as a paradise on Earth, captivates with its pristine beauty and luxurious tranquility. '

  },

   {
    id:4,
    imgSrc: img4,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora, nestled in the South Pacific and often hailed as a paradise on Earth, captivates with its pristine beauty and luxurious tranquility. '

  },

   {
    id:5,
    imgSrc: img5,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora, nestled in the South Pacific and often hailed as a paradise on Earth, captivates with its pristine beauty and luxurious tranquility. '

  },

   {
    id:6,
    imgSrc: img6,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora, nestled in the South Pacific and often hailed as a paradise on Earth, captivates with its pristine beauty and luxurious tranquility. '

  },

   {
    id:7,
    imgSrc: img7,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora, nestled in the South Pacific and often hailed as a paradise on Earth, captivates with its pristine beauty and luxurious tranquility. '

  },

   {
    id:8,
    imgSrc: img8,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora, nestled in the South Pacific and often hailed as a paradise on Earth, captivates with its pristine beauty and luxurious tranquility. '

  },

   {
    id:9,
    imgSrc: img9,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora, nestled in the South Pacific and often hailed as a paradise on Earth, captivates with its pristine beauty and luxurious tranquility. '

  },

   {
    id:10,
    imgSrc: img10,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora, nestled in the South Pacific and often hailed as a paradise on Earth, captivates with its pristine beauty and luxurious tranquility.' 

  }

]


const Main = () => {
//lets create a react hook to add a scroll animation.....
  useEffect(() =>{
    Aos.init({duration: 2000})
  },[])



  return (
   <section className='main container section'>
    <div className="secTitle">
      <h3 data-aos="fade-right"
       className="title">
        Most visited destinations
      </h3>
    </div>

    <div className="secContent grid">
      {/* so,guys here we are going to use high ordfer array method(map).
      to do that we shall use a list of object in one array.
       I'm going to create an array named data and from that 
       we shall. map() array to fetch each destination at once. 
       I hope this will make sence to you! */}

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                {/* here it will return single id from the map array */}
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle}/>
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex">
                      DETAILS <HiOutlineClipboardCheck className="icon"/>
                    </button>
                  </div>
              </div>
            )
            
          })
        }


    </div>
   </section>
  )
}

export default Main


import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import video from '../../asset/video1.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiTripadvisor } from 'react-icons/si';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import $ from 'jquery';
import 'select2/dist/css/select2.min.css';
import 'select2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const destinationInputRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    $(destinationInputRef.current).select2();
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holiday
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <select ref={destinationInputRef} className="select2">
                <option value="destination1">India</option>
                <option value="destination2">America</option>
                <option value="destination3">Dubai</option>
                <option value="destination4">Maldives</option>
                <option value="destination5">Indonesia</option>
                <option value="destination6">Singapore</option>
              </select>
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                onClickOutside={() => destinationInputRef.current.blur()} // Close the date picker when clicking outside
              />
            </div>
          </div>

          <div className="priceInput">
            <div className="lable_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <SiTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;


















// IN THIS CODE I ADDED DROPDOWN ON SELECT CITIES IN ADD ......


// import React, { useEffect, useRef } from 'react';
// import './home.css';
// import video from '../../asset/video1.mp4';
// import { GrLocation } from 'react-icons/gr';
// import { HiFilter } from 'react-icons/hi';
// import { FiFacebook } from 'react-icons/fi';
// import { AiOutlineInstagram } from 'react-icons/ai';
// import { SiTripadvisor } from 'react-icons/si';
// import { BsListTask } from 'react-icons/bs';
// import { TbApps } from 'react-icons/tb';
// import $ from 'jquery'; // Import jQuery
// import 'select2/dist/css/select2.min.css';
// import 'select2';




// import Aos from 'aos';
// import 'aos/dist/aos.css';

// const Home = () => {
//   useEffect(() => {
//     Aos.init({ duration: 2000 });
//   }, []);

//   const destinationInputRef = useRef(null);

//   useEffect(() => {
//     // Initialize Select2 for destination input
//     $(destinationInputRef.current).select2();
//   }, []);

//   return (
//     <section className="home">
//       <div className="overlay"></div>
//       <video src={video} muted autoPlay loop type="video/mp4"></video>

//       <div className="homeContent container">
//         <div className="textDiv">
//           <span data-aos="fade-up" className="smallText">
//             Our Packages
//           </span>
//           <h1 data-aos="fade-up" className="homeTitle">
//             Search your Holiday
//           </h1>
//         </div>


//         {/* <div className="destinationInput">
//             <label htmlFor="city">Search your destination:</label>
//             <div className="input flex">
//               <input type="text" placeholder='Enter name here....'/>
//               <GrLocation className="icon"/>
//             </div>
//           </div> */}

//         <div data-aos="fade-up" className="cardDiv grid">
//           <div className="destinationInput">
//             <label htmlFor="city">Search your destination:</label>
//             <div className="input flex">
//               {/* Add a ref to the select element */}
//               <select ref={destinationInputRef} className="select2">
//                 <option value="destination1">India</option>
//                 <option value="destination2">America</option>
//                 <option value="destination3">Dubai</option>
//                 <option value="destination4">MalDivs</option>
//                 <option value="destination5">Indonatia</option>
//                 <option value="destination6">Singapore</option>
//                 {/* Add your options here */}
//               </select>
//               <GrLocation className="icon" />
//             </div>
//           </div>

//           <div className="dateInput">
//             <label htmlFor="date">Select your date:</label>
//             <div className="input flex">
//               <input type="date" />
//             </div>
//           </div>

//           <div className="priceInput">
//             <div className="lable_total flex">
//               <label htmlFor="price">Max price:</label>
//               <h3 className="total">$5000</h3>
//             </div>
//             <div className="input flex">
//               <input type="range" max="5000" min="1000" />
//             </div>
//           </div>

//           <div className="searchOptions flex">
//             <HiFilter className="icon" />
//             <span>MORE FILTERS</span>
//           </div>
//         </div>

//         <div data-aos="fade-up" className="homeFooterIcons flex">
//           <div className="rightIcons">
//             <FiFacebook className="icon" />
//             <AiOutlineInstagram className="icon" />
//             <SiTripadvisor className="icon" />
//           </div>
//           <div className="leftIcons">
//             <BsListTask className="icon" />
//             <TbApps className="icon" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;











//THIS CODE IS MY REAL CODE 


// import React, {useEffect} from 'react'
// import './home.css'
// import video from '../../asset/video1.mp4'
// import{GrLocation} from 'react-icons/gr'
// import{HiFilter} from 'react-icons/hi'
// import{FiFacebook} from 'react-icons/fi'
// import{AiOutlineInstagram} from 'react-icons/ai'
// import{SiTripadvisor} from 'react-icons/si'
// import{BsListTask} from 'react-icons/bs'
// import{TbApps} from 'react-icons/tb'

// import Aos from 'aos'
// import 'aos/dist/aos.css'

// const Home = () => {
// //lets create a react hook to add a scroll animation.....
//   useEffect(() =>{
//     Aos.init({duration: 2000})
//   },[])




//   return (
//     <section className='home'>
//       <div className="overlay"></div>
//       <video src={video} muted autoPlay loop type="video/mp4"></video>

//       <div className="homeContent container">
//         <div className="textDiv">

//           <span data-aos="fade-up" className="smallText">
//             Our Packages
//           </span>

//           <h1 data-aos="fade-up" className="homeTitle">
//             Search your Holiday
//           </h1>
//         </div>

//         <div data-aos="fade-up" className="cardDiv grid">

//            <div className="destinationInput">
//             <label htmlFor="city">Search your destination:</label>
//             <div className="input flex">
//               <input type="text" placeholder='Enter name here....'/>
//               <GrLocation className="icon"/>
//             </div>
//           </div>


//           <div className="dateInput">
//             <label htmlFor="date">Select your date:</label>
//             <div className="input flex">
//               <input type="date"/>
              
//             </div>
//           </div>

          
//           <div className="priceInput">
//             <div className="lable_total flex">
//               <label htmlFor="price">Max price:</label>
//               <h3 className="total">$5000</h3>
//             </div>
//             <div className="input flex">
//               <input type="range" max="5000" min="1000" />
//             </div>
//           </div>

//           <div className="searchOptions flex">
//             <HiFilter className="icon"/>
//             <span>MORE FILTERS</span>
//           </div>
//         </div>

//         <div data-aos="fade-up" className="homeFooterIcons flex">
//           <div className="rightIcons">
//             <FiFacebook className="icon"/>
//             <AiOutlineInstagram className="icon"/>
//             <SiTripadvisor className="icon"/>
//           </div>
//           <div className="leftIcons">
//             <BsListTask className="icon"/>
//             <TbApps className="icon"/>

//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Home



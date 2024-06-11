import React from "react";
import Navbar from "../components/Navbar";

import { FaHome } from "react-icons/fa";
import Slider from "../components/Slider";
import SliderCard from "../components/SliderCard";
import Form from "../components/Form";

const data1 = [
  {
    img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Modern",
    desc: "Modern designs that are both trendy and functional.",
  },
  {
    img: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Modern",
    desc: "Modern designs that are both trendy and functional.",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1686090448451-fe1327f9b042?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Modern",
    desc: "Modern designs that are both trendy and functional.",
  },
];

const data2 = [
  {
    title: "Modern",
    desc: "Modern designs that are both trendy and functional.",
  },
  {
    title: "Modern",
    desc: "Modern designs that are both trendy and functional.",
  },
  {
    title: "Modern",
    desc: "Modern designs that are both trendy and functional.",
  },
];

const data3 = [
  {title: "Modern",desc: "Modern designs that are both trendy and functional."},
  {title: "Modern",desc: "Modern designs that are both trendy and functional."},
  {title: "Modern",desc: "Modern designs that are both trendy and functional."},
];

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="intro">
        <div className="wrapper-section flex">
          <div className="message flex-col">
            <h1>Bring home beautiful interiors <span className="yellow">that fit your budget</span></h1>
            <h3>Experience unmatched quality & timely delivery with Livspace</h3>
            </div>
          <Form/>
        </div>
      </div>
      <div className="reasonsToLove">
        <div className="wrapper-section">
          <div className="icons">
            <FaHome size={50} />
            <p>Personalized designs</p>
          </div>
          <div className="icons">
            <FaHome size={50} />
            <p>Flat 10-year warranty</p>
          </div>
          <div className="icons">
            <FaHome size={50} />
            <p>Transparent pricing</p>
          </div>
        </div>
      </div>
      <div className="pageIntro">
        <div className="wrapper-section">
          <h1>The home design you crave</h1>
          <p>
            When you give your home the Livspace touch, you get both beauty and
            functionality. We employ state-of-the-art technology to ensure your
            home features a flawless look that lasts a very long time.
          </p>
          <button className="btn">Book Free Consultation</button>
        </div>
      </div>
      <div className="stats">
        <div className="wrapper-section">
          <h1>Let our numbers do the talking!</h1>
          <div className="stats-boxes">
            <div className="stats-box">
              <h2>1000 +</h2>
              <p>Happy customers</p>
            </div>
            <div className="stats-box">
              <h2>100 +</h2>
              <p>Design experts</p>
            </div>
            <div className="stats-box">
              <h2>10 +</h2>
              <p>Years of warranty</p>
            </div>
          </div>
        </div>
      </div>
      <div className="browserSlider">
        <div className="wrapper-section" style={{ position: "relative" }}>
          <div
            className="flex center"
            style={{ justifyContent: "space-between" }}
          >
            <div className="flex-col heading">
              <h1>Homes for every style</h1>
              <p>
                Superior finishes, trendy designs and quality modules at
                affordable prices.
              </p>
            </div>
            <button className="btn">Get Free Quote</button>
          </div>
          <Slider sliderItems={data1} SliderCard={SliderCard} button={true}/>
        </div>
      </div>
      <div className="videoTestimony">
        <div className="wrapper-section">
          <div className="flex center">
            <div className="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/?v=plZa9M19W1c&list=RDCLAK5uy_ksEjgm3H_7zOJ_RHzRjN1wY-_FFcs7aAU&index=2&ab_channel=King"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <p>
              <center>
                "Our experience with Livspace was pleasurable because of the
                project managers. The work got done before 45 days just the way
                we wanted it to be."
              </center>
              <center>Swati and Gaurav</center>
            </p>
          </div>
        </div>
      </div>
      <div className="priceEstimator">
        <div className="wrapper-section flex-col center">
          <h1>Interior Price Estimator</h1>
          <p>Calculate the approximate cost of doing up your interiors</p>
          <div className="flex" style={{ justifyContent: "space-between" }}>
            {data2.map((item, id) => {
              return (
                <div key={id} className="priceEstimatorCard">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                    <button className="btn">Get Free Quote</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="browserSlider whatWeOffer">
        <div className="wrapper-section" style={{ position: "relative" }}>
          <div
            className="flex center"
            style={{ justifyContent: "space-between" }}
          >
            <div className="flex-col heading">
              <h1>What we offer
              </h1>
            </div>
            <button className="btn">BOOK A FREE CONSULTATION</button>
          </div>
          <Slider sliderItems={data3} SliderCard={SliderCard} button={false}/>
        </div>
      </div> */}
      <div className="browserSlider whatWeOffer">
        <div className="wrapper-section" style={{ position: "relative" }}>
          <div
            className="flex center"
            style={{ justifyContent: "space-between" }}
          >
            <div className="flex-col heading">
              <h1>We'll let our clients do the talking</h1>
              <p>
              Here’s what they have to say
              </p>
            </div>
            <button className="btn">BOOK A FREE CONSULTATION</button>
          </div>
          <Slider sliderItems={data1} SliderCard={SliderCard} button={true}/>
        </div>
      </div>
      <div className="footer">
        <center>
          <p className="tradeMark">© 2022 Livspace.com All Rights Reserved.</p>
        </center>
        <p>
        ¹For full scope, please visit, www.livspace.com/in/service | ²For kitchen, wardrobes and storage | ³In comparison with a branded player and for exact scope | ⁴Booking amount is 5% of the final quote or Rs.25000, whichever is higher interior designers in Pune interior designer near me best interior designers in Pune interior designers in bangalore interior design bangalore interior designer near me best interior designers in mumbai interior designer near me interior designer mumbai interior design mumbai interior designers in hyderabad best interior designers in Hyderabad interior designer near me interior designer Hyderabad interior designers in chennai interiors in chennai interior decorators in chennai best interior designers in chennai interior designers in noida interior designer near me interior decorator near me best interior designers in noida best interior designers in kolkata interior company in Kolkata home interiors Kolkata best interior designers in Kolkata interior designers in gurgaon interior designer near me home interior design interior design near me
        </p>
      </div>
    </>
  );
};

export default HomePage;

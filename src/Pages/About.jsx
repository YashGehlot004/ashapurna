import { Link } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import "./About.css";
import officeimg from "./aboutimages/officeimg.webp";
import counter1 from "./aboutimages/happy.svg";
import counter2 from "./aboutimages/villas.svg";
import counter3 from "./aboutimages/units.svg";
import counter4 from "./aboutimages/happy.svg";
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faRoute } from "@fortawesome/free-solid-svg-icons";
import project1 from "./homeimages/project1.webp";
import project2 from "./homeimages/project2.webp";
import project3 from "./homeimages/project3.webp";

import pbimg1 from "./homeimages/pbimg1.webp";
import pbimg2 from "./homeimages/pbimg2.webp";
import pbimg3 from "./homeimages/pbimg3.webp";
import vision from "./aboutimages/ourvision.png";
import mission from "./aboutimages/ourmission.png";
import floorplan from "./aboutimages/floor-plan.jpg";


export function About(){
    let[counter,setCounter]=useState('false');
    return(
        <>
        <Header/>
        <section className="about-main position-relative">
            <div className="container-fluid">
                <div className="row">
                    <div className="px-0 col-lg-12">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="about-info1">
                                    <nav aria-label="breadcrumb">
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                            
                                                <Link to={'/'}>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                <Link to={'/about-us'}>About Us</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">About Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid px-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-6 col-12 p-3">
                        <div className="mb-5 mb-lg-0">
                            
                            <div className="px-2 py-4 rounded">
                            
                                <img  src={officeimg} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 p-3 mt-3">
                            <div className="office-info position-relative rounded p-3">
                                <span className="hcolor">About Us!</span>
                                <div className="spanborder"></div>
                                <h3 className="hcolor fs-35 text-capitalize fw-900 ">Welcome To Ashapurna</h3>
                                <p className="pcolor  lh-24 fw-400" style={{textAlign:'justify'}}>Ashapurna Buildcon started its journey in 1996 as a private limited company and turned into a limited company after just one year. Ashapurna became the first ISO 9001:2000 certified company in western Rajasthan in 2004. The company's first offering was a project of 400 villas/plots that came in 1997 and was completed within a record time of 18 months which eventually became a norm in many upcoming projects. In its existence of 27 years, Ashapurna Buildcon has 40 projects and has delivered 36 projects spanning 75,00,000 square feet, housing more than 25,000 smiling and satisfied faces.</p>
                                <p className="pcolor  lh-24 fw-400" style={{textAlign:'justify'}}>Under the able leadership of Shri Karan Singh Uchiyarda, Ashapurna Buildcon has spread its wings across top residential projects in Jodhpur, hospitality, education, and entertainment domains, and commercial property in Jodhpur. Shri Karan Singh Uchiyarda gave 'Comforts Residency Palace', a renowned 3-star hotel, to Jodhpur, Hotel Ashapurna to Jaipur and another 5-star resort-cum-hotel is coming up at Uchiyarda. In education, the company owns and runs an architecture institute named 'Buddha Institute' in Udaipur. In the past few years, Ashapurna Buildcon has proven itself to the Real Estate market of Rajasthan and conveyed itself as one of the Top 10 Real Estate Companies in Rajasthan. In its quest to take the idea of lifestyle to the next level, Ashapurna Buildcon has launched premium budget homes that perfectly blend style and practicality.</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <section className="container counter-info">
                <div className="row">
                <div className="col-lg-3 col-6 p-3">
                    <div className="counter-info-box py-3">
                            <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{width:"70px", height:"70px"}}>
                                <img alt="" src={counter1} className=" img-fluid"/>
                            </div>
                            <div className="text-white text-center">
                                <span className="scolor pt-2">
                                    
                                    <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                                                {counter && <CountUp end={26000} duration={2}/>}+
                                    </ScrollTrigger>
                                </span>
                                <h4 className="text-capitalize pt-2">Happy Families</h4>
                            </div>
                                            
                           

                        </div>
                    </div>
                    <div className="col-lg-3 col-6 p-3">
                    <div className="counter-info-box py-3">
                            <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{width:"70px", height:"70px"}}>
                                <img alt="" src={counter2} className=" img-fluid"/>
                            </div>
                            <div className="text-white text-center">
                                <span className="scolor pt-2">
                                    
                                    <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                                                {counter && <CountUp end={40} duration={2}/>}+
                                    </ScrollTrigger>
                                </span>
                                <h4 className="text-capitalize pt-2">Projects Completed</h4>
                            </div>
                                            
                           

                        </div>
                    </div>
                    <div className="col-lg-3 col-6 p-3">
                    <div className="counter-info-box py-3">
                            <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{width:"70px", height:"70px"}}>
                                <img alt="" src={counter3} className=" img-fluid"/>
                            </div>
                            <div className="text-white text-center">
                                <span className="scolor pt-2">
                                    
                                    <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                                                {counter && <CountUp end={11000} duration={2}/>}+
                                    </ScrollTrigger>
                                </span>
                                <h4 className="text-capitalize pt-2">Units</h4>
                            </div>
                                            
                           

                        </div>
                    </div>
                    <div className="col-lg-3 col-6 p-3">
                    <div className="counter-info-box py-3">
                            <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{width:"70px", height:"70px"}}>
                                <img alt="" src={counter4} className=" img-fluid"/>
                            </div>
                            <div className="text-white text-center">
                                <span className="scolor pt-2">
                                    
                                    <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                                                {counter && <CountUp end={26} duration={2}/>}+
                                    </ScrollTrigger>
                                </span>
                                <h4 className="text-capitalize pt-2">Years of Experience</h4>
                            </div>
                                            
                           

                        </div>
                    </div>
                    
                </div>
            </section>
        </section>
        <section className="container-fluid project my-3">
            <div className="container">
                <div className="row project-row1">
                    <div className="col-lg-12 col-12 pt-3">
                            <h3 className="hcolor">Featured Projects</h3>
                    </div>
                </div>
                <div>
                            <div className="row align-items-center justify-content-center position-relative project-row2 ">
                                <div className="col-lg-4 col-12 p-3 mb-3">
                                    <div className="project-col position-relative ">
                                        <img src={project1} alt="" className="img-fluid"/>
                                        <div className="pbtn position-absolute">Ready to Occupy</div>
                                        <div className="project-box position-absolute bg-white text-left rounded shadow-lg ">
                                            <div className="d-flex align-items-center px-4 py-2 gap-3">
                                                <img src={pbimg1} alt="" className="img-fluid rounded" width="60"/>
                                                <h3>AshaPurna Platinum</h3>
                                            </div>
                                            <div className="px-4">
                                            
                                            <FontAwesomeIcon icon={faRoute}/>
                                                <span>Vaishali Nagar, jaipur, Rajasthan, 302021</span>
                                            </div>
                                            <div className="project-box-inner d-flex align-items-center justify-content-between px-3 py-4 ">
                                                <div className="">
                                                <FontAwesomeIcon icon={faHome} className="ficon"/>
                                                <span>Ready to Move</span>
                                                </div>
                                                <div>
                                                    <button>See All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 p-3 mb-3">
                                    <div className="project-col position-relative">
                                        <img src={project2} alt="" className="img-fluid"/>
                                        <div className="pbtn pbtn3 position-absolute">Few Units Left</div>
                                        <div className="project-box position-absolute bg-white text-left rounded shadow-lg ">
                                            <div className="d-flex align-items-center px-4 py-2 gap-3">
                                                <img src={pbimg1} alt="" className="img-fluid rounded" width="60"/>
                                                <h3>AshaPurna Platinum</h3>
                                            </div>
                                            <div className="px-4">
                                            
                                            <FontAwesomeIcon icon={faRoute}/>
                                                <span>Vaishali Nagar, jaipur, Rajasthan, 302021</span>
                                            </div>
                                            <div className="project-box-inner d-flex align-items-center justify-content-between px-3 py-4 ">
                                                <div className="">
                                                <FontAwesomeIcon icon={faHome} className="ficon"/>
                                                <span>Ready to Move</span>
                                                </div>
                                                <div>
                                                    <button>See All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 p-3 mb-3">
                                    <div className="project-col position-relative">
                                        <img src={project3} alt="" className="img-fluid"/>
                                        <div className="pbtn pbtn2 position-absolute">Possission Soon</div>
                                        <div className="project-box position-absolute bg-white text-left rounded shadow-lg ">
                                            <div className="d-flex align-items-center px-4 py-2 gap-3">
                                                <img src={pbimg1} alt="" className="img-fluid rounded" width="60"/>
                                                <h3>AshaPurna Platinum</h3>
                                            </div>
                                            <div className="px-4">
                                            
                                            <FontAwesomeIcon icon={faRoute}/>
                                                <span>Vaishali Nagar, jaipur, Rajasthan, 302021</span>
                                            </div>
                                            <div className="project-box-inner d-flex align-items-center justify-content-between px-3 py-4 ">
                                                <div className="">
                                                <FontAwesomeIcon icon={faHome} className="ficon"/>
                                                <span>Ready to Move</span>
                                                </div>
                                                <div>
                                                    <button>See All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
            </div>
        </section>
        <section className="container-fluid vision my-5">
            <div className="container">
                <div className="row vision-row py-3">
                    <div className="col-lg-6 col-12 vision-col">
                        <div className="vision-info bg-white d-flex justify-content-bentween align-items-center rounded">
                            <div className="row">
                                <div className="col-lg-5 col-6">
                                    <div className="vision-img">
                                        <img src={vision} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-6">
                                    <div className="vision-content p-3">
                                        <h3>Our Vision</h3>
                                        <div className="visionhr"></div>
                                        <p className="pcolor">To be a leader and most preferred real estate name in Rajasthan by constantly striving hard to put innovation and futuristic perspective in every fine detail of designing and execution.</p>
                                    </div>
                                </div>
                            </div>
                            
                           
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 vision-col">
                        <div className="vision-info bg-white d-flex justify-content-bentween align-items-center rounded">
                            <div className="row">
                                <div className="col-lg-5 col-6">
                                    <div className="vision-img">
                                        <img src={mission} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-6">
                                    <div className="vision-content p-3">
                                        <h3>Our Mission</h3>
                                        <div className="visionhr"></div>
                                        <p className="pcolor">To be a leader and most preferred real estate name in Rajasthan by constantly striving hard to put innovation and futuristic perspective in every fine detail of designing and execution.</p>
                                    </div>
                                </div>
                            </div>
                            
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid floor-plan mb-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-12 ms-auto">
                        <div className="ach-info bg-white p-4 position-relative">
                                <h2 className="hcolor text-capitalize">Our Achievements</h2>
                                <p className="pcolor fs-14">“Indian Leadership Award for Infrastructure Development 2011” for Outstanding Contribution in the Field of Infrastructure Development to Shri Karan Singh Uchiyarda, Chairman & Managing Director, Ashapurna Buildcon by “Indian Economic Development & Research Association, New Delhi”</p>
                                <p className="pcolor fs-14">Dignitaries Present: Dr. Bhishma Narayan Singh, Former Governor, Tamil Nadu; Dr. GVG Krishnamoorti, Former Chief Election Commissioner, Government of India and Jogendra Singh, Former CBI Director</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       <Footer/>
       </>
    )
}
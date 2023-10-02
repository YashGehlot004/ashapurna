import { Link } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import "./Ourjourney.css";
import bgbanner from "./ourjourneyimages/floor-plan.jpg";
import counter1 from "./aboutimages/happy.svg";
import counter2 from "./aboutimages/villas.svg";
import counter3 from "./aboutimages/units.svg";
import counter4 from "./aboutimages/happy.svg";
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faRoute } from "@fortawesome/free-solid-svg-icons";
export function Ourjourney(){
    let[counter,setCounter]=useState('false');
    return(
        <>
        <Header/>
        <section className="contact-main position-relative">
            <div className="container-fluid">
                <div className="row">
                    <div className="px-0 col-lg-12">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="contact-info1">
                                    <nav aria-label="breadcrumb">
                                        <ul className="breadcrumb px-5">
                                            <li className="breadcrumb-item">
                                            
                                                <Link to={'#'}>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                <Link to={'/our-journey'}>Our Journey</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">Our Journey</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid our-journey-main">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-7 col-12  p-3">
                        <div className="our-journey-info bg-white position-relative shadow-lg p-3 ">
                            <span>Our Journey</span>
                            <div className="spanborder"></div>
                            <h3 className="hcolor">A Brief About Our Journey</h3>
                            <p className="pcolor">Ashapurna started its journey in 1996 and registered as a Private Limited Company. After a year it turned into a Limited Company. We are proud that Ashapurna Buildcon Ltd. became the first ISO: 9001: 2000 Certified Company of western Rajasthan in the year 2004. Ashapurna Stated its first project of 400 Villas / Plot in 1997 and completed it within the record time period of 18 months.</p>
                            <p className="pcolor">Then in a series every project that was started, was completed within an 18-month period. Till now a total of 42 projects consisting of around 6000 Villas, and around 18,000 Plots in various Residential townships / Commercial malls / Residential Multistoried complexes have already been completed and handed over to the respective customers. Shri Karan Singh Unchiyarda is also a recognized person in the hospitality sector as a renowned hotelier. The prestigious three-star comforts Residency Palace Hotel is a unique landmark in the city of Jodhpur.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        <section className="container-fluid mb-3">
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
        <section className="container-fluid  my-3">
            <div className="container ">
                
                <div className="row">
                    <div className="col-lg-12 p-3 journey-info">
                        <h2 className="hcolor py-3">Our Flourishing Journey Over The Last Decade</h2>
                    </div>
                </div>
                <div className="position-relative">
                <div className="row px-5 position-relative">
                    <div className="col-lg-6 p-lg-3 p-4 ">
                        <div className="jinfo-main d-flex flex-column justify-content-end bg-white shadow-lg p-3">
                            <h3 className="hcolor px-3">2022</h3>
                            <ul className="pcolor">
                                <li>Ashapurna NRI</li>
                                <li>Ashapurna Township Pachpadra</li>
                                <li>Ashapurna Kundan Villa</li>
                            </ul>
                            <div className="triangle_right"></div>
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                    <div className="milestone-dotl"></div>
                </div>
                <div className="row px-5 position-relative ">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6 p-lg-3 p-4 ">
                        <div className="jinfo-main d-flex flex-column justify-content-end bg-white shadow-lg p-3">
                            <h3 className="hcolor px-3">2021</h3>
                            <ul className="pcolor">
                                <li>Ashapurna NRI</li>
                                <li>Ashapurna Township Pachpadra</li>
                                <li>Ashapurna Kundan Villa</li>
                            </ul>
                            <div className="triangle_left"></div>
                            
                        </div>
                        <div className="milestone-dotr"></div>
                    </div>
                </div>
                <div className="row px-5 position-relative">
                    <div className="col-lg-6 p-lg-3 p-4 ">
                        <div className="jinfo-main d-flex flex-column justify-content-end bg-white shadow-lg p-3">
                            <h3 className="hcolor px-3">2020</h3>
                            <ul className="pcolor">
                                <li>Ashapurna NRI</li>
                                <li>Ashapurna Township Pachpadra</li>
                                <li>Ashapurna Kundan Villa</li>
                            </ul>
                            <div className="triangle_right"></div>
                            
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                    <div className="milestone-dotl"></div>
                </div>
                <div className="row px-5 position-relative ">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6 p-lg-3 p-4 ">
                        <div className="jinfo-main d-flex flex-column justify-content-end bg-white shadow-lg p-3">
                            <h3 className="hcolor px-3">2019</h3>
                            <ul className="pcolor">
                                <li>Ashapurna NRI</li>
                                <li>Ashapurna Township Pachpadra</li>
                                <li>Ashapurna Kundan Villa</li>
                            </ul>
                            <div className="triangle_left"></div>
                        </div>
                    </div>
                    <div className="milestone-dotr"></div>
                    
                </div>
                <div className="jborder"></div>
                
                </div>
                
            </div>
        </section>
        <Footer/>
        </>
    )
}
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import "./Home.css";

import aboutimg from "./homeimages/aboutus.webp";
import happy from "./homeimages/happy.png";
import units from "./homeimages/units.png";
import property from "./homeimages/property.svg";
import mtape from "./homeimages/measuring-tape.png";
import echeck from "./homeimages/experience-check.png";
import hlogo from "./homeimages/hlogo.webp";
import swimming from "./homeimages/swimming.svg";
import temple from "./homeimages/temple.svg";
import community from "./homeimages/community.svg";
import project1 from "./homeimages/project1.webp";
import project2 from "./homeimages/project2.webp";
import project3 from "./homeimages/project3.webp";
import pbimg1 from "./homeimages/pbimg1.webp";
import pbimg2 from "./homeimages/pbimg2.webp";
import pbimg3 from "./homeimages/pbimg3.webp";
import path from "./homeimages/path.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route } from "react-router";
import { faClock, faHome, faRoute, faShare, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faStackpath, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import komal from "./homeimages/komal.webp";
import quotes from "./homeimages/quotes.png";
import media1 from "./homeimages/media1.webp";
import media2 from "./homeimages/media2.webp";
import media3 from "./homeimages/media3.webp";
import CountUp from 'react-countup';
import Slider from "react-slick";
import ScrollTrigger from "react-scroll-trigger";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HomeApiconrol } from "../ApiCalling/HomeApiconrol";
import { ApiBaseUrl } from "../ApiCalling/ApiBaseUrl";
import axios from "axios";

export function Home() {
    let [SliderData, setSliderData] = useState([]);
    let [Abouts, setAbouts] = useState([])
    let [whyUs, setWhyUs] = useState([])
    let [ourWorks, setOurWork] = useState([])
    let [whyUsmainImg, setmainImg] = useState([])
    let [projectImg, setprojectImg] = useState([])
    let [projectOverViewImg, setProjectOverViewImg] = useState([])

    let [ourProject, setourProject] = useState([])
    
    
    let rmdata = Abouts.homepage_description
    let removeTagdata = { __html: rmdata }



    let ApibAseUrl = ApiBaseUrl

    let geatdata = () => {
        axios.get(ApibAseUrl + `home`)
            .then((res) => {
                return res.data
            })
            .then((finalres) => {

                let Sliderdatas = {
                    'sliderMAinPath': finalres._data.getSliders,
                    'sliderImgpath': finalres._data.slider_image_path

                }

                let Fdata = [Sliderdatas]
                setSliderData(Fdata)

                setAbouts(finalres._data.aboutUs)
                setmainImg(finalres._data.why_choose_us_image_path)
                setWhyUs(finalres._data.getWhyChooseUs)
                setOurWork(finalres._data.getFeaturedProjects)
                setprojectImg(finalres._data.project_image_path)
                setourProject(finalres._data.getProjects)
                setProjectOverViewImg()
                console.log(finalres._data)



            })
    }


    useEffect(() => {
        geatdata()
    }, [])


    let [counter, setCounter] = useState('false');
    let settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    let settings1 = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    let settings2 = {
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    let settings3 = {
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <Header />
            <div className="fixed-btn">Enquire</div>
            <div className="fixed-wapp d-flex justify-content-center align-items-center position-fixed">
                <FontAwesomeIcon icon={faWhatsapp} className="fwicon" />
            </div>
            <div className="fixed-wapp fixed-wapp1 d-flex justify-content-center align-items-center position-fixed">
                <FontAwesomeIcon icon={faShareAlt} className="fwicon" />
            </div>
            <section>
                <div className="container-fluid banner mb-2">
                    <div className="container">


                        <HomeApiconrol sliderData={SliderData} />

                        <div className="container banner-form mt-3">
                            <div className="row py-2 align-items-center">
                                <form className="row py-2 py-3 justify-content-center align-items-center">
                                    <div className="col-md-2" >
                                        <input required placeholder="Name" type="text" name="name" />
                                    </div>
                                    <div className="col-md-2">
                                        <input required placeholder="Email" type="email" name="email" />
                                    </div>
                                    <div className="col-md-2">
                                        <input required placeholder="Phone" type="tel" name="phone" />
                                    </div>
                                    <div className="col-md-2">
                                        <select className="form-select ">
                                            <option>Select Property</option>
                                            <option>Ashapurna NRI</option>
                                            <option>Ashapurna Mall</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <input required placeholder="Explain your Query" type="text" name="enquiry" id="" />
                                    </div>
                                    <div className="col-md-2 text-end">
                                        <button className="fbtn" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid py-3 mb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div>
                                <img src={aboutimg} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-7 p-3">
                            <div className="about-content position-relative ">
                                <span className="text-uppercase">{Abouts.homepage_title} <div className="spanborder"></div></span>
                                <h1 >{Abouts.homepage_tagline}</h1>
                                <p dangerouslySetInnerHTML={removeTagdata}></p>
                                <div className="position-absolute about-overlay px-2">
                                    <div className="row row-cols-5 align-items-center">
                                        <div className="col p-2">
                                            <div className="overlay-inner p-2">
                                                <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{ width: "70px", height: "70px" }}>
                                                    <img alt="" src={happy} className=" img-fluid" />
                                                </div>
                                                <div><span>
                                                    <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                                                        {counter && <CountUp end={26000} duration={2} />}+
                                                    </ScrollTrigger>
                                                </span>
                                                </div>

                                                <h4>Years of Experience</h4>
                                            </div>
                                        </div>
                                        <div className="col p-2">
                                            <div className="overlay-inner p-2">
                                                <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{ width: "70px", height: "70px" }}>
                                                    <img alt="" src={units} className=" img-fluid" />
                                                </div>
                                                <div><span>
                                                    <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                                                        {counter && <CountUp end={11000} duration={2} />}+
                                                    </ScrollTrigger></span></div>
                                                <h4>Units</h4>
                                            </div>
                                        </div>
                                        <div className="col p-2">
                                            <div className="overlay-inner p-2">
                                                <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{ width: "70px", height: "70px" }}>
                                                    <img alt="" src={property} className=" img-fluid" />
                                                </div>
                                                <div><span>
                                                    <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                                                        {counter && <CountUp end={40} duration={2} />}+
                                                    </ScrollTrigger>
                                                </span></div>
                                                <h4>Projects</h4>
                                            </div>
                                        </div>
                                        <div className="col p-2">
                                            <div className="overlay-inner p-2">
                                                <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{ width: "70px", height: "70px" }}>
                                                    <img alt="" src={echeck} className=" img-fluid" />
                                                </div>
                                                <div><span>
                                                    <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                                                        {counter && <CountUp end={26} duration={2} />}+
                                                    </ScrollTrigger>
                                                </span></div>
                                                <h4>Years Of Experience</h4>
                                            </div>
                                        </div>
                                        <div className="col p-2">
                                            <div className="overlay-inner p-2">
                                                <div className="bg-white mx-auto d-flex justify-content-center align-items-center overlay-img" style={{ width: "70px", height: "70px" }}>
                                                    <img alt="" src={mtape} className=" img-fluid" />
                                                </div>
                                                <div><span>
                                                    <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                                                        {counter && <CountUp end={36} duration={2} />}+
                                                    </ScrollTrigger>
                                                </span></div>
                                                <h4>Lakh Sq.Ft Delivered</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid py-5 why-section mt-5 ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 p-3">
                            <div className="why-content position-relative p-4">
                                <span className="text-uppercase">Why Us <div className="spanborder"></div></span>
                                <h1 >Why Ashapurna Is The Best Choice</h1>
                                <p>Ashapurna Buildcon started its journey in 1996 as a private limited company and within a year the company gained many core values and turned into a limited company.</p>
                            </div>
                        </div>
                        <div className="col-lg-8 p-3">
                            <div className="row">

                                {
                                    whyUs.map((v) => {
                                        return (
                                            <div className="col-12 col-md-6 py-4 px-5">
                                                <div className="why-block1 p-4 bg-white">
                                                    <img src={whyUsmainImg + v.image} alt="" className="img-fluid" width="60" />
                                                    <h3> {v.title}</h3>
                                                    <div className="whyborder"></div>
                                                    <p>{v.short_description}</p>
                                                    <Link to={'#'} className="wbtn ">Read More</Link>
                                                    <div className="transparent"></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid our-work">
                <div className="row position-relative">
                    <div className="container pe-2 py-3">
                        <span>Our Work</span>
                        <div className="spanborder"></div>
                        <h1>Featured Projects</h1>
                    </div>
                </div>
                <Slider {...settings3}>

                    {
                        ourWorks.map((v) => {
                            return (
                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-6 col-12 p-3">
                                            <div className="our-work-img">
                                                <img src={projectImg+v.homepage_image} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12 p-3">
                                            <div className="our-work-content">
                                                <div className="d-flex align-items-center">
                                                    <img src={hlogo} alt="" className="img-fluid" width="60" />
                                                    <h2>{v.name}</h2>
                                                </div>
                                                <p> {v.short_description}</p>
                                                <div className="scontent d-flex align-items-center  block-content p-lg-4 ">
                                                    <div className="row gx-0">
                                                        <div className="col-6">
                                                            <img src={swimming} alt="" className="img-fluid" width="40" />
                                                        </div>
                                                        <div className="col-6">
                                                            <h3>Swimming</h3>
                                                            <span>Pool</span>
                                                        </div>
                                                    </div>
                                                    <div className="row gx-0">
                                                        <div className="col-6">
                                                            <img src={temple} alt="" className="img-fluid" width="40" />
                                                        </div>
                                                        <div className="col-6">
                                                            <h3>Temple</h3>
                                                            <span>Near By</span>
                                                        </div>
                                                    </div>
                                                    <div className="row gx-0">
                                                        <div className="col-6">
                                                            <img src={community} alt="" className="img-fluid" width="40" />
                                                        </div>
                                                        <div className="col-6">
                                                            <h3>Community</h3>
                                                            <span>Hall</span>
                                                        </div>
                                                    </div>

                                                </div>
                                                <button className="wbtn">See All</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </Slider>

            </section>
            <section className="container-fluid project mb-3 pb-5 ">
                <div className="container">
                    <div className="row project-row1">
                        <div className="col-lg-8 col-12 pt-3">
                            <div className="project-header position-relative py-3">
                                <span>Our Projects</span>
                                <div className="spanborder"></div>
                                <h1>Ready & Nearing Completion Projects</h1>
                                <p>Meticulously crafted and emotionally designed, Ashapurna homes are the perfect place to be in. A lifestyle benchmark in Rajasthan, today and tomorrow, our successful communities are our biggest achievement.</p>
                            </div>
                        </div>
                    </div>

                   

                    <Slider {...settings2}>
                        {
                            ourProject.map((v)=>{
                                return(
                                    <div className="row align-items-center justify-content-center  project-row2 d-flex z-auto ">
                            <div className="col-lg-4 col-12 p-3 mb-3">
                                <div className="project-col position-relative ">
                                    <img src={project1} alt="" className="img-fluid" />
                                    <div className="pbtn position-absolute"> {v.current_status}</div>
                                    <div className="project-box position-absolute bg-white text-left rounded shadow-lg ">
                                        <div className="d-flex align-items-center px-4 py-2 gap-3">
                                            <img src={pbimg1} alt="" className="img-fluid rounded" width="60" />
                                            <h3>{v.name}</h3>
                                        </div>
                                        <div className="px-4">

                                            <FontAwesomeIcon icon={faRoute} />
                                            <span>{v.address}</span>
                                        </div>
                                        <div className="project-box-inner d-flex align-items-center justify-content-between px-3 py-4 ">
                                            <div className="">
                                                <FontAwesomeIcon icon={faHome} className="ficon" />
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
                                    <img src={project2} alt="" className="img-fluid" />
                                    <div className="pbtn pbtn3 position-absolute">Few Units Left</div>
                                    <div className="project-box position-absolute bg-white text-left rounded shadow-lg ">
                                        <div className="d-flex align-items-center px-4 py-2 gap-3">
                                            <img src={pbimg1} alt="" className="img-fluid rounded" width="60" />
                                            <h3>AshaPurna Platinum</h3>
                                        </div>
                                        <div className="px-4">

                                            <FontAwesomeIcon icon={faRoute} />
                                            <span>Vaishali Nagar, jaipur, Rajasthan, 302021</span>
                                        </div>
                                        <div className="project-box-inner d-flex align-items-center justify-content-between px-3 py-4 ">
                                            <div className="">
                                                <FontAwesomeIcon icon={faHome} className="ficon" />
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
                                    <img src={project3} alt="" className="img-fluid" />
                                    <div className="pbtn pbtn2 position-absolute">Possission Soon</div>
                                    <div className="project-box position-absolute bg-white text-left rounded shadow-lg ">
                                        <div className="d-flex align-items-center px-4 py-2 gap-3">
                                            <img src={pbimg1} alt="" className="img-fluid rounded" width="60" />
                                            <h3>AshaPurna Platinum</h3>
                                        </div>
                                        <div className="px-4">

                                            <FontAwesomeIcon icon={faRoute} />
                                            <span>Vaishali Nagar, jaipur, Rajasthan, 302021</span>
                                        </div>
                                        <div className="project-box-inner d-flex align-items-center justify-content-between px-3 py-4 ">
                                            <div className="">
                                                <FontAwesomeIcon icon={faHome} className="ficon" />
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
                                )
                            })
                        }
                       
                    </Slider>

                </div>
            </section>
            <section className="container-fluid testimonial">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12 px-3 pt-lg-5 pt-3 pb-lg-5 ">
                            <div className="testimonial-left position-relative">
                                <span>Our Testimonial</span>
                                <div className="spanborder"></div>
                                <h1>What They're Saying About Ashapurna</h1>
                                <p>From the heart of South Mumbai to the western suburbs and beyond take your pick from our finest addresses in the city. Select a location to view the property.</p>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 pb-lg-5 pb-2 pt-lg-3 mt-0">

                            <Slider {...settings2}>
                                <div className="testimonial-right position-relative bg-white px-3 py-3">
                                    <div className="d-flex p-3">
                                        <div className="testimonial-img position-relative ">
                                            <img src={komal} alt="" className="img-fluid" />
                                        </div>
                                        <div className="testimonial-info px-3">
                                            <h5>Komal Bhatti</h5>
                                            <span>Ashapurna Aangan</span>
                                        </div>
                                    </div>
                                    <div className="testimonial-ex p-5 position-relative">
                                        <p>Being a customer of Ashapurna Buildcon Ltd. makes me happy. The experience was excellent. To ensure swift and easy process, they were always attentive, responsive, and went above and beyond to help us not as a client ut as a family member.</p>
                                        <div className="position-absolute quote-img">
                                            <img src={quotes} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-right position-relative bg-white px-3 py-3">
                                    <div className="d-flex p-3">
                                        <div className="testimonial-img position-relative ">
                                            <img src={komal} alt="" className="img-fluid" />
                                        </div>
                                        <div className="testimonial-info px-3">
                                            <h5>Komal Bhatti</h5>
                                            <span>Ashapurna Aangan</span>
                                        </div>
                                    </div>
                                    <div className="testimonial-ex p-5 position-relative">
                                        <p>Being a customer of Ashapurna Buildcon Ltd. makes me happy. The experience was excellent. To ensure swift and easy process, they were always attentive, responsive, and went above and beyond to help us not as a client ut as a family member.</p>
                                        <div className="position-absolute quote-img">
                                            <img src={quotes} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-right position-relative bg-white px-3 py-3">
                                    <div className="d-flex p-3">
                                        <div className="testimonial-img position-relative ">
                                            <img src={komal} alt="" className="img-fluid" />
                                        </div>
                                        <div className="testimonial-info px-3">
                                            <h5>Komal Bhatti</h5>
                                            <span>Ashapurna Aangan</span>
                                        </div>
                                    </div>
                                    <div className="testimonial-ex p-5 position-relative">
                                        <p>Being a customer of Ashapurna Buildcon Ltd. makes me happy. The experience was excellent. To ensure swift and easy process, they were always attentive, responsive, and went above and beyond to help us not as a client ut as a family member.</p>
                                        <div className="position-absolute quote-img">
                                            <img src={quotes} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </Slider>

                        </div>
                    </div>

                </div>
            </section>
            <section className="container-fluid media p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-3">
                            <div className="media-header d-flex justify-content-between">
                                <h1>Media and Events</h1>
                                <button>See All</button>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div className="row d-flex">
                            <div className="col-lg-4 col-12 p-3">
                                <div className="media-box">
                                    <div className="media-box-img">
                                        <img src={media1} alt="" className="img-fluid" />
                                    </div>
                                    <div className="media-box-info bg-white text-start p-2">
                                        <p>Auspicious Beginnings: Bhoomi Pujan Ceremony at Ashapurna Buildcon's New Site</p>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faRoute} className="px-2 ricon" />
                                            <span>AshaPurna Heritage</span>
                                        </div>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faClock} className="px-2 ricon" />
                                            <span>2023-08-15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 p-3">
                                <div className="media-box">
                                    <div className="media-box-img">
                                        <img src={media2} alt="" className="img-fluid" />
                                    </div>
                                    <div className="media-box-info bg-white text-start p-2">
                                        <p>Auspicious Beginnings: Bhoomi Pujan Ceremony at Ashapurna Buildcon's New Site</p>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faRoute} className="px-2 ricon" />
                                            <span>AshaPurna Heritage</span>
                                        </div>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faClock} className="px-2 ricon" />
                                            <span>2023-08-15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 p-3">
                                <div className="media-box">
                                    <div className="media-box-img">
                                        <img src={media3} alt="" className="img-fluid" />
                                    </div>
                                    <div className="media-box-info bg-white text-start p-2">
                                        <p>Auspicious Beginnings: Bhoomi Pujan Ceremony at Ashapurna Buildcon's New Site</p>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faRoute} className="px-2 ricon" />
                                            <span>AshaPurna Heritage</span>
                                        </div>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faClock} className="px-2 ricon" />
                                            <span>2023-08-15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex">
                            <div className="col-lg-4 col-12 p-3">
                                <div className="media-box">
                                    <div className="media-box-img">
                                        <img src={media1} alt="" className="img-fluid" />
                                    </div>
                                    <div className="media-box-info bg-white text-start p-2">
                                        <p>Auspicious Beginnings: Bhoomi Pujan Ceremony at Ashapurna Buildcon's New Site</p>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faRoute} className="px-2 ricon" />
                                            <span>AshaPurna Heritage</span>
                                        </div>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faClock} className="px-2 ricon" />
                                            <span>2023-08-15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 p-3">
                                <div className="media-box">
                                    <div className="media-box-img">
                                        <img src={media2} alt="" className="img-fluid" />
                                    </div>
                                    <div className="media-box-info bg-white text-start p-2">
                                        <p>Auspicious Beginnings: Bhoomi Pujan Ceremony at Ashapurna Buildcon's New Site</p>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faRoute} className="px-2 ricon" />
                                            <span>AshaPurna Heritage</span>
                                        </div>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faClock} className="px-2 ricon" />
                                            <span>2023-08-15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 p-3">
                                <div className="media-box">
                                    <div className="media-box-img">
                                        <img src={media3} alt="" className="img-fluid" />
                                    </div>
                                    <div className="media-box-info bg-white text-start p-2">
                                        <p>Auspicious Beginnings: Bhoomi Pujan Ceremony at Ashapurna Buildcon's New Site</p>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faRoute} className="px-2 ricon" />
                                            <span>AshaPurna Heritage</span>
                                        </div>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faClock} className="px-2 ricon" />
                                            <span>2023-08-15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex">
                            <div className="col-lg-4 col-12 p-3">
                                <div className="media-box">
                                    <div className="media-box-img">
                                        <img src={media1} alt="" className="img-fluid" />
                                    </div>
                                    <div className="media-box-info bg-white text-start p-2">
                                        <p>Auspicious Beginnings: Bhoomi Pujan Ceremony at Ashapurna Buildcon's New Site</p>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faRoute} className="px-2 ricon" />
                                            <span>AshaPurna Heritage</span>
                                        </div>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faClock} className="px-2 ricon" />
                                            <span>2023-08-15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 p-3">
                                <div className="media-box">
                                    <div className="media-box-img">
                                        <img src={media2} alt="" className="img-fluid" />
                                    </div>
                                    <div className="media-box-info bg-white text-start p-2">
                                        <p>Auspicious Beginnings: Bhoomi Pujan Ceremony at Ashapurna Buildcon's New Site</p>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faRoute} className="px-2 ricon" />
                                            <span>AshaPurna Heritage</span>
                                        </div>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faClock} className="px-2 ricon" />
                                            <span>2023-08-15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 p-3">
                                <div className="media-box">
                                    <div className="media-box-img">
                                        <img src={media3} alt="" className="img-fluid" />
                                    </div>
                                    <div className="media-box-info bg-white text-start p-2">
                                        <p>Auspicious Beginnings: Bhoomi Pujan Ceremony at Ashapurna Buildcon's New Site</p>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faRoute} className="px-2 ricon" />
                                            <span>AshaPurna Heritage</span>
                                        </div>
                                        <div className="text-left">

                                            <FontAwesomeIcon icon={faClock} className="px-2 ricon" />
                                            <span>2023-08-15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <Footer />
        </>
    )
}
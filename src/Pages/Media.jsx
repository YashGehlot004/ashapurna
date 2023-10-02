import "./Media.css";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import media1 from "./mediaimages/media1.webp";
import media2 from "./mediaimages/media2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faRoute } from "@fortawesome/free-solid-svg-icons";
import camp1 from "./mediaimages/camp1.webp";
import camp2 from "./mediaimages/camp2.webp";
import camp3 from "./mediaimages/camp3.webp";
import media from "./mediaimages/media.webp";
export function Media(){
    let settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <>
        <Header/>
        <section className="media-main position-relative">
            <div className="container-fluid">
                <div className="row">
                    <div className="px-0 col-lg-12">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="media-info1 text-center">
                                    <nav aria-label="breadcrumb" className="px-4">
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                            
                                                <Link to={'#'}>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                <Link to={'/media-events'}>Media and Events</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">Media and Events</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-3">
                        <div className="media-upper p-5 position-relative">
                            <span className="py-5">Ashapurna Events</span>
                            <div className="spanborder"></div>
                            <h3 className="hcolor">Media & Events</h3>
                            <p className="pcolor py-2">Shri Karan Singh Uchiyarda, the Founder Chairman & Managing Director of Ashapurna Buildcon, is a man with crystal clear foresight and strong business acumen. It is his vision that led the company to scale new heights and set new benchmarks of excellence in Jodhpurs real estate scene.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <div className="container">
                <div className="row align-items-center mb-5">
               
                    <div className="col-lg-6 col-12 p-3 mb-lg-0 mb-5 ms-lg-0 ms-2 ">
                        <div className="life-img-div ms-lg-4 ms-4">
                            <img src={media} alt="" className="img-fluid mt-4 "/>
                        </div>
                    </div>
               
                    <div className="col-lg-6 col-12 py-3 px-3">
                        <div className="media-life">
                            <h2 className="hcolor">Life At AshaPurna</h2>
                            <p className="pcolor py-2">People are the most valuable asset at Ashapurna Buildcon Limited, they are the bedrock on which our growth & success stands – they are pillars of strength that makes us who we are. The management teams comprise of highly-motivated, industry and domain experts who have been with the organization, in most cases, for over a decade now. They closely drive and lead their respective functions infusing impetus, passion, energy and growth for their teams and the organization at large. With commitment to Vision and Mission and the Values, they ensure high-integrity and continued credence in all we do and deliver.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        <section className="container-fluid camp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center hcolor">
                        <h2 className="fw-700 py-3">Utsav and Camps</h2>
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-12 p-3">
                        <div className="media-box px-3">
                            <div className="media-box-img">
                                <img src={camp1} alt="" className="img-fluid" />
                            </div>
                            <div className="media-box-info bg-white text-start p-2">
                                <h4 className="hcolor text-truncate py-2">77th Independence Day Celebrations</h4>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faRoute} className="px-2 ricon"/>
                                    <span>Ashapurna Buildcon Corporate Office, Jodhpur</span>
                                </div>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faClock} className="px-2 ricon"/>
                                    <span>2023-08-15</span>
                                </div>
                                <p className="pcolor py-2">77 Years of Progress, Unity, and Freedom!</p>
                                <button className="media-btn mb-2">Read More</button>
                            </div>
                        </div>
                </div>
                <div className="col-lg-4 col-12 p-3">
                        <div className="media-box px-3">
                            <div className="media-box-img">
                                <img src={camp2} alt="" className="img-fluid" />
                            </div>
                            <div className="media-box-info bg-white text-start p-2">
                                <h4 className="hcolor text-truncate py-2">77th Independence Day Celebrations</h4>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faRoute} className="px-2 ricon"/>
                                    <span>Ashapurna Buildcon Corporate Office, Jodhpur</span>
                                </div>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faClock} className="px-2 ricon"/>
                                    <span>2023-08-15</span>
                                </div>
                                <p className="pcolor py-2">77 Years of Progress, Unity, and Freedom!</p>
                                <button className="media-btn mb-2">Read More</button>
                            </div>
                        </div>
                </div>
                <div className="col-lg-4 col-12 p-3">
                        <div className="media-box px-3">
                            <div className="media-box-img">
                                <img src={camp3} alt="" className="img-fluid" />
                            </div>
                            <div className="media-box-info bg-white text-start p-2">
                                <h4 className="hcolor text-truncate py-2">77th Independence Day Celebrations</h4>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faRoute} className="px-2 ricon"/>
                                    <span>Ashapurna Buildcon Corporate Office, Jodhpur</span>
                                </div>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faClock} className="px-2 ricon"/>
                                    <span>2023-08-15</span>
                                </div>
                                <p className="pcolor py-2">77 Years of Progress, Unity, and Freedom!</p>
                                <button className="media-btn mb-2">Read More</button>
                            </div>
                        </div>
                </div>
                <div className="col-lg-4 col-12 p-3">
                        <div className="media-box px-3">
                            <div className="media-box-img">
                                <img src={camp1} alt="" className="img-fluid" />
                            </div>
                            <div className="media-box-info bg-white text-start p-2">
                                <h4 className="hcolor text-truncate py-2">77th Independence Day Celebrations</h4>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faRoute} className="px-2 ricon"/>
                                    <span>Ashapurna Buildcon Corporate Office, Jodhpur</span>
                                </div>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faClock} className="px-2 ricon"/>
                                    <span>2023-08-15</span>
                                </div>
                                <p className="pcolor py-2">77 Years of Progress, Unity, and Freedom!</p>
                                <button className="media-btn mb-2">Read More</button>
                            </div>
                        </div>
                </div>
                <div className="col-lg-4 col-12 p-3">
                        <div className="media-box px-3">
                            <div className="media-box-img">
                                <img src={camp2} alt="" className="img-fluid" />
                            </div>
                            <div className="media-box-info bg-white text-start p-2">
                                <h4 className="hcolor text-truncate py-2">77th Independence Day Celebrations</h4>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faRoute} className="px-2 ricon"/>
                                    <span>Ashapurna Buildcon Corporate Office, Jodhpur</span>
                                </div>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faClock} className="px-2 ricon"/>
                                    <span>2023-08-15</span>
                                </div>
                                <p className="pcolor py-2">77 Years of Progress, Unity, and Freedom!</p>
                                <button className="media-btn mb-2">Read More</button>
                            </div>
                        </div>
                </div>
                <div className="col-lg-4 col-12 p-3">
                        <div className="media-box px-3">
                            <div className="media-box-img">
                                <img src={camp3} alt="" className="img-fluid" />
                            </div>
                            <div className="media-box-info bg-white text-start p-2">
                                <h4 className="hcolor text-truncate py-2">77th Independence Day Celebrations</h4>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faRoute} className="px-2 ricon"/>
                                    <span>Ashapurna Buildcon Corporate Office, Jodhpur</span>
                                </div>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faClock} className="px-2 ricon"/>
                                    <span>2023-08-15</span>
                                </div>
                                <p className="pcolor py-2">77 Years of Progress, Unity, and Freedom!</p>
                                <button className="media-btn mb-2">Read More</button>
                            </div>
                        </div>
                </div>
                <div className="col-lg-4 col-12 p-3">
                        <div className="media-box px-3">
                            <div className="media-box-img">
                                <img src={camp1} alt="" className="img-fluid" />
                            </div>
                            <div className="media-box-info bg-white text-start p-2">
                                <h4 className="hcolor text-truncate py-2">77th Independence Day Celebrations</h4>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faRoute} className="px-2 ricon"/>
                                    <span>Ashapurna Buildcon Corporate Office, Jodhpur</span>
                                </div>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faClock} className="px-2 ricon"/>
                                    <span>2023-08-15</span>
                                </div>
                                <p className="pcolor py-2">77 Years of Progress, Unity, and Freedom!</p>
                                <button className="media-btn mb-2">Read More</button>
                            </div>
                        </div>
                </div>
                <div className="col-lg-4 col-12 p-3">
                        <div className="media-box px-3">
                            <div className="media-box-img">
                                <img src={camp2} alt="" className="img-fluid" />
                            </div>
                            <div className="media-box-info bg-white text-start p-2">
                                <h4 className="hcolor text-truncate py-2">77th Independence Day Celebrations</h4>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faRoute} className="px-2 ricon"/>
                                    <span>Ashapurna Buildcon Corporate Office, Jodhpur</span>
                                </div>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faClock} className="px-2 ricon"/>
                                    <span>2023-08-15</span>
                                </div>
                                <p className="pcolor py-2">77 Years of Progress, Unity, and Freedom!</p>
                                <button className="media-btn mb-2">Read More</button>
                            </div>
                        </div>
                </div>
                <div className="col-lg-4 col-12 p-3">
                        <div className="media-box px-3">
                            <div className="media-box-img">
                                <img src={camp3} alt="" className="img-fluid" />
                            </div>
                            <div className="media-box-info bg-white text-start p-2">
                                <h4 className="hcolor text-truncate py-2">77th Independence Day Celebrations</h4>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faRoute} className="px-2 ricon"/>
                                    <span>Ashapurna Buildcon Corporate Office, Jodhpur</span>
                                </div>
                                <div className="text-left py-1">
                                    <FontAwesomeIcon icon={faClock} className="px-2 ricon"/>
                                    <span>2023-08-15</span>
                                </div>
                                <p className="pcolor py-2">77 Years of Progress, Unity, and Freedom!</p>
                                <button className="media-btn mb-2">Read More</button>
                            </div>
                        </div>
                </div>
                </div>
           </div>
        </section>

        <Footer/>
        </>
    )
}
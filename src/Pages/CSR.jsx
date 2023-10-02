import { Link } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import "./CSR.css";
import event1 from "./csreventsimages/event1.jpg";
import event2 from "./csreventsimages/event2.webp";
import event3 from "./csreventsimages/event3.webp";
import event4 from "./csreventsimages/event4.webp";
import update1 from "./csreventsimages/update1.webp";
import update2 from "./csreventsimages/update2.webp";
import update3 from "./csreventsimages/update3.webp";   


export function CSR(){
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
                                                <Link to={'/social-responsibility'}>Social Responsibility</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">Social Responsibility</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-4">
                        <div className="csr-events position-relative p-3">
                            <span>CSR</span>
                            <div className="spanborder"></div>
                            <h2 className="hcolor">Social Events</h2>
                            <p className="pcolor pt-3">Shri Karan Singh Uchiyarda with his zeal and enthusiasm to work for social upliftment of poor people has established a trust named as ‘Shree Magmohan Charitable Trust’, with the association of Ashapurna Buildcon Ltd. works for the welfare of General public by organizing medical camps, social events like large scale marriage functions, Housing and other donations to poor and needy people, charitable activities etc.</p>
                            <p className="pcolor pt-3">In Jan -2011 Many families suffered due to illicit liquor tragedy and No. of families ruined because death of young families members. Ashapurna Decided to help out some of poorest families and help them morally and monetary on 28 Aug 2011 in the presence of Honorable M.P (Pali) Sh. Badhri Ram Jakhar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <div className="container">
                <div className="row align-items-center gx-3 mb-5">
                    <div className="col-lg-6 col-12 order-lg-0 order-1 p-3">
                        <div className="csr-events-info position-relative">
                            <span>BY SHRI KARAN SINGH UCHIYARDA</span>
                            <div className="spanborder"></div>
                            <h3 className="hcolor">Donated 5 VIllas In Uchiayrda</h3>
                            <p className="pcolor pt-3">Shri Karan Singh Uchiyarda (Chairman and Managing Director of Ashapurna Buildcon ltd.) and businessman Mr. Arjun Singh Uchiyarda Uchiyarda has decided to give free "Mohankutir" to 5 families in Uchiyarda village in the memory of his father Mohansingh Khinchi. Mr Karan Singh also said it was his father’s dream that nobody in Uchiyarda village should remain homeless. In Uchiyarda there are 5 families who didnn’t shelter for their livelihood, those 5 families are Beejaram Bheel, Gurdaram Bheel, Kesharam Bheel, Gordhan Bheel, and Kaluram Meghwal.</p>
                            <p className="pcolor py-4">To complete father’s dream the houses names as MOHANKUTEER and their foundation are laid in the presence of all the 36 communities of the village.  </p>
                            <p className="pcolor ">During the foundation of houses, Mr Arjun Singh Uchiyarda, Malam singh, Hanwant singh, Kesar singh, Parbat singh, Jitendra singh, Gaj singh, Bhawani singh, Lun singh, Chandan Singh, Hariram prajapar and Bhakar ram dewasi were present.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 order-lg-1 order-0 ps-lg-5 ps-0">
                        <div className="csr-events-img p-3">
                            <img src={event1} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="row align-items-center gx-3 mb-5">
                    <div className="col-lg-6 col-12 pe-lg-5 pe-0">
                        <div className="csr-events-img p-3">
                            <img src={event2} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 p-3">
                        <div className="csr-events-info position-relative">
                            <span>BY SHRI KARAN SINGH UCHIYARDA</span>
                            <div className="spanborder"></div>
                            <h3 className="hcolor">Donated 5 VIllas In Uchiayrda</h3>
                            <p className="pcolor pt-3">Shri Karan Singh Uchiyarda (Chairman and Managing Director of Ashapurna Buildcon ltd.) and businessman Mr. Arjun Singh Uchiyarda Uchiyarda has decided to give free "Mohankutir" to 5 families in Uchiyarda village in the memory of his father Mohansingh Khinchi. Mr Karan Singh also said it was his father’s dream that nobody in Uchiyarda village should remain homeless. In Uchiyarda there are 5 families who didnn’t shelter for their livelihood, those 5 families are Beejaram Bheel, Gurdaram Bheel, Kesharam Bheel, Gordhan Bheel, and Kaluram Meghwal.</p>
                            
                        </div>
                    </div>
                </div>

                <div className="row align-items-center gx-3 mb-5">
                    <div className="col-lg-6 col-12 order-lg-0 order-1 p-3">
                        <div className="csr-events-info position-relative">
                            <span>BY SHRI KARAN SINGH UCHIYARDA</span>
                            <div className="spanborder"></div>
                            <h3 className="hcolor">Donated 5 VIllas In Uchiayrda</h3>
                            <p className="pcolor pt-3">Shri Karan Singh Uchiyarda (Chairman and Managing Director of Ashapurna Buildcon ltd.) and businessman Mr. Arjun Singh Uchiyarda Uchiyarda has decided to give free "Mohankutir" to 5 families in Uchiyarda village in the memory of his father Mohansingh Khinchi. Mr Karan Singh also said it was his father’s dream that nobody in Uchiyarda village should remain homeless. In Uchiyarda there are 5 families who didnn’t shelter for their livelihood, those 5 families are Beejaram Bheel, Gurdaram Bheel, Kesharam Bheel, Gordhan Bheel, and Kaluram Meghwal.</p>
                            <p className="pcolor py-4">To complete father’s dream the houses names as MOHANKUTEER and their foundation are laid in the presence of all the 36 communities of the village.  </p>
                            <p className="pcolor ">During the foundation of houses, Mr Arjun Singh Uchiyarda, Malam singh, Hanwant singh, Kesar singh, Parbat singh, Jitendra singh, Gaj singh, Bhawani singh, Lun singh, Chandan Singh, Hariram prajapar and Bhakar ram dewasi were present.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 order-lg-1 order-0 ps-lg-5 ps-0">
                        <div className="csr-events-img p-3">
                            <img src={event3} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="row align-items-center gx-3 mb-5">
                    <div className="col-lg-6 col-12 pe-lg-5 pe-0">
                        <div className="csr-events-img p-3">
                            <img src={event4} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 p-3">
                        <div className="csr-events-info position-relative">
                            <span>BY SHRI KARAN SINGH UCHIYARDA</span>
                            <div className="spanborder"></div>
                            <h3 className="hcolor">Donated 5 VIllas In Uchiayrda</h3>
                            <p className="pcolor pt-3">Shri Karan Singh Uchiyarda (Chairman and Managing Director of Ashapurna Buildcon ltd.) and businessman Mr. Arjun Singh Uchiyarda Uchiyarda has decided to give free "Mohankutir" to 5 families in Uchiyarda village in the memory of his father Mohansingh Khinchi. Mr Karan Singh also said it was his father’s dream that nobody in Uchiyarda village should remain homeless. In Uchiyarda there are 5 families who didnn’t shelter for their livelihood, those 5 families are Beejaram Bheel, Gurdaram Bheel, Kesharam Bheel, Gordhan Bheel, and Kaluram Meghwal.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-3 supdate text-center">
                        <h2 className="hcolor">Social Updates</h2>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-4 col-12 p-3 mb-5">
                        <div className="supdate-box py-3 px-4 text-lg-start text-center">
                            <div className="supdate-box-img p-2 bg-white ms-lg-0 ms-5">
                                <img src={update1} alt="" className="img-fluid" />
                            </div>
                            <h4>Blanket Distribution</h4>
                            <h6>#By Director of Ashapurna</h6>
                            <p className="pcolor">On 21st december 2021, Ashapurna group director Shri Harshwardhan Singh distributed blankets and food to the needy people of society.</p>
                            <button className="wbtn ms-0">Read More</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 p-3 mb-5">
                        <div className="supdate-box py-3 px-4 text-lg-start text-center">
                            <div className="supdate-box-img p-2 bg-white ms-lg-0 ms-5">
                                <img src={update2} alt="" className="img-fluid" />
                            </div>
                            <h4>Blanket Distribution</h4>
                            <h6>#By Director of Ashapurna</h6>
                            <p className="pcolor">On 21st december 2021, Ashapurna group director Shri Harshwardhan Singh distributed blankets and food to the needy people of society.</p>
                            <button className="wbtn ms-0">Read More</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 p-3 mb-5">
                        <div className="supdate-box py-3 px-4 text-lg-start text-center">
                            <div className="supdate-box-img p-2 bg-white ms-lg-0 ms-5">
                                <img src={update3} alt="" className="img-fluid" />
                            </div>
                            <h4>Blanket Distribution</h4>
                            <h6>#By Director of Ashapurna</h6>
                            <p className="pcolor">On 21st december 2021, Ashapurna group director Shri Harshwardhan Singh distributed blankets and food to the needy people of society.</p>
                            <button className="wbtn ms-0">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-4 col-12 p-3 mb-5">
                        <div className="supdate-box py-3 px-4 text-lg-start text-center">
                            <div className="supdate-box-img p-2 bg-white ms-lg-0 ms-5">
                                <img src={update1} alt="" className="img-fluid" />
                            </div>
                            <h4>Blanket Distribution</h4>
                            <h6>#By Director of Ashapurna</h6>
                            <p className="pcolor">On 21st december 2021, Ashapurna group director Shri Harshwardhan Singh distributed blankets and food to the needy people of society.</p>
                            <button className="wbtn ms-0">Read More</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 p-3 mb-5">
                        <div className="supdate-box py-3 px-4 text-lg-start text-center">
                            <div className="supdate-box-img p-2 bg-white ms-lg-0 ms-5">
                                <img src={update2} alt="" className="img-fluid" />
                            </div>
                            <h4>Blanket Distribution</h4>
                            <h6>#By Director of Ashapurna</h6>
                            <p className="pcolor">On 21st december 2021, Ashapurna group director Shri Harshwardhan Singh distributed blankets and food to the needy people of society.</p>
                            <button className="wbtn ms-0">Read More</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 p-3 mb-5">
                        <div className="supdate-box py-3 px-4 text-lg-start text-center">
                            <div className="supdate-box-img p-2 bg-white ms-lg-0 ms-5">
                                <img src={update3} alt="" className="img-fluid" />
                            </div>
                            <h4>Blanket Distribution</h4>
                            <h6>#By Director of Ashapurna</h6>
                            <p className="pcolor">On 21st december 2021, Ashapurna group director Shri Harshwardhan Singh distributed blankets and food to the needy people of society.</p>
                            <button className="wbtn ms-0">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}
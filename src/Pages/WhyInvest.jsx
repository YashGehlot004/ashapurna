import { Link } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import "./WhyInvest.css";
import whyimg from "./whyinvestimages/why-invest--in-jodhpur.jpg";
export function WhyInvest(){
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
                                        <ul className="breadcrumb ps-5">
                                            <li className="breadcrumb-item">
                                            
                                                <Link to={'#'}>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                <Link to={'/why-invest'}>Why Invest In Jodhpur</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">Why Invest In Jodhpur</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <div className="container">
                <div className="row why-invest">
                    <div className="col-lg-12 p-3">
                        <h2 className="text-center hcolor pt-5 pb-2">WHY IN JODHPUR</h2>
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col-lg-4 col-12 p-3">
                        <div className="invest-img border rounded-1 shadow p-2">
                            <img alt="" src={whyimg} className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 p-3">
                        <div className="why-info px-4 pt-5">
                            <h3>A Quick Introduction to Jodhpur's History</h3>
                            <p className="pcolor  py-3">Jodhpur or the Blue City of India is the second largest city of Rajasthan. The city was founded by Rao Jodha, a chief of the famous Rathore clan, way back in 1459. The city was earlier known as Marwar which later has been changed to Jodhpur to honour its founder Rao Jodha. Jodhpur is divided into two main areas- the old city and the new city.The old city is separated from the main city by a 10 km long wall that surrounds its boundary. There are eight gates to enter and exit the old city which is majorly a tourist attraction with some iconic hotspots within its parameters while the new city is a modern metropolis that surrounds the old city and houses all major developments of Jodhpur.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 p-3">
                    <div className="why-info px-4 pt-5 mt-3">
                            <h3>Top 3 Reasons why Jodhpur makes an Excellent Choice for Property Investments</h3>
                            <ol className="pt-2">
                                <li className="pcolor">Booming Tourism and Handicrafts Industry</li>
                                <p className="pcolor  py-2">Jodhpur is a very popular tourist destination which attracts thousands domestic and international tourists. The city offers scenic landscape, mesmerising heritage architecture like Mehrangarh Fort, Umaid Bhawan Palace, Jaswant Thada and Rai ka Bagh Palace. Jodhpur also houses attractions like Umed Garden and an extensive government museum. On development front, the city has witnessed plenty of infrastructure development which includes hotels, restaurants and cafes. Jodhpur is also popular for its majestic destination weddings and booming handicraft industry. All aspects of development make property in Jodhpur a logical and popular choice for real estate investment to fetch big returns in the times to come.  </p>
                                <li className="pcolor">Fast-Paced Economic Growth</li>
                                <p className="pcolor  py-2">Real estate developer in Jodhpur and experts consider tier-II and tier-III cities like Jodhpur as the growth engine of future. Ever increasing property price and growth saturation in Tier-I cities are paving the way for the growth of tier-II and tier-III cities. Availability of skilled and low cost workforce further added to the idea. To make the most out of it, the state government is actively working to bring investors to the Blue City of India. Some notable infrastructure development of the city are-</p>
                                <ul className="pb-2">
                                    <li className="pcolor">CAZRI (Central Arid Zone Research Institute)</li>
                                    <li className="pcolor">Barmer Refinery and Petrochemical Complex</li>
                                    <li className="pcolor">The Marwar Junction</li>
                                    <li className="pcolor">Maulana Azad University, Agricultural University, Jodhpur National University, National Law University, Dr. Sarvepalli Radhakrishnan Rajasthan Ayurved University</li>
                                </ul>
                                <li className="pcolor">Lower Initial Property Prices and High Property Price Appreciation</li>
                                <p className="pcolor  py-2">Jodhpur has relatively lower property buying rates thus promises a great return on real estate investment. As par Makaan data, the average property price in Jodhpur was 51.75 lakhs in 2019, far lower than the average of Delhi (3.65 crores) and Gurgaon (90-99 lakhs). Recent deduction in DLC (District Lease Committee) rates makes Jodhpur property even more attractive. With favourable taxation rules, real estate investors in Rajasthan see lower tax burdens compared to Delhi, Haryana, Punjab and other states. In a welcome move, the revised GST rates for under construction housing properties has been brought down to 5% from 12% which further inspires trust for any kind of real estate investment.</p>
                            </ol>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}
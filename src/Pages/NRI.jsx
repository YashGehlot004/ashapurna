import "./NRI.css";
import { Link } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
export function NRI(){
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
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                            
                                                <Link to={'#'}>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                <Link to={'/nri-corner'}>NRI Corner</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">NRI Corner</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <div className="container">
                <div className="row nrih">
                    <div className="col-lg-12">
                        <h2 className="hcolor text-center pt-5 mt-3">NRI</h2>
                    </div>
                </div>
                <div className="row pb-5 align-items-center">
                    <div className="col-lg-6 col-12 p-3 mt-3">
                       
                            
                            <div className=" nri-info position-relative p-3 rounded">
                                <span>NRI</span>
                                <div className="spanborder"></div>
                                <h2 className="fs-30 fw-600">NRI Clients<span> Corner</span></h2>
                                <p className="pcolor fs-14 lh-24">A non-resident Indian (NRI) is a citizen of India who holds an Indian passport and has temporarily emigrated to another country for six months or more for employment, residence, education or any other such purpose. A person of Indian origin (PIO) is a person of Indian origin or ancestors but who is not a citizen of India and is the citizen of another country. A PIO might have been a citizen of India and subsequently taken citizenship of another country, or have ancestors born in India or other states. Other terms with vaguely the same meaning are overseas Indian and expatriate India. In common usage, this often includes Indian-born individuals (and also people of other nations with Indian ancestors) who have taken the citizenship of other countries. As per the Ministry of Overseas Indian Affairs, India has the second largest diaspora in the world after overseas Chinese. The overseas Indian community is estimated at 25 million spread across every region of the world.</p>
                                <h5 className="">Investment destination: India</h5>
                                <p className="pcolor fs-14 lh-24">In recent times, India has emerged as one of the popular real estate destinations for global investors. Real estate is one of the booming industries in the country and investment in property is promising and set to flourish in the times to come. It is expected to scale new heights with the emergence of fresh localities in tier-I and II cities.</p>
                            </div>
                        
                    </div>
                    <div className="col-lg-6 col-12 p-3 mt-3">
                            <div className="nri-form rounded p-3">
                                <h2 className="hcolor fs-26 text-capitalize mb-20">NRI Enquiry</h2>
                                <h3 className="pcolor fs-42 text-capitalize fw-600 py-3 ">Please fill in the form and we would contact you at the earliest.ion?</h3>
                                <form >
                                    <div className="row g-3">

                                    <div className="col-12">
                                        <input  type="text"  className="form-control py-2" placeholder="Name" name="name" required/>
                                    </div>

                                    <div className="col-12">
                                       <input  type="text" className="form-control py-2" placeholder="Phone" name="mobile" required/>
                                    </div>

                                    <div className="col-12">
                                        <input  type="text"  className="form-control py-2" placeholder="Email" name="email" required/>
                                    </div>
                                    
                                    <div className="col-12">
                                        <textarea className="form-control" id="your-message" placeholder="Message" name="your-message" rows="5" required/>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                        <div className="col-md-6 pt-2">
                                            <button type="submit" className="btn cform-btn w-90 fw-bold" >
                                            Submit
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}
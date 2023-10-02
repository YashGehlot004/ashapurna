import { Link } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import "./Management.css";
import quote from "./Managementimages/quotes.png";
import member1 from "./Managementimages/member1.jpg";
import member2 from "./Managementimages/member2.jpg";
export function  Management(){
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
                                                <Link to={'/management-speaks'}>Management Speaks</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">Mamangement Speaks</h2>
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
                        <div className="board-team text-center py-5">
                            <h2 className="hcolor">Board of Directors</h2>
                            <p className="pcolor">Ashapurna Group is a socially responsible company. The group is active in almost all spheres of society and works on the ground level to bring about meaningful change. Ashapurna has worked in the fields of health, education, social awareness, and environment. During the challenging time of Covid, the group has worked hand in hand with government and non-government agencies. Ashapurna understands its responsibility and always strives hard to be with society in times of need.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid">
            <div className="container">
                <div className="row align-items-center mb-lg-5">
                    <div className="col-lg-6 col-12 p-3 order-lg-0 order-1">
                        <div className="board-info position-relative p-3">
                            <span>CMD</span>
                            <div className="spanborder"></div>
                            <h3 className="hcolor pb-3">Shri Karan Singh Uchiyarda</h3>
                            <p className="pcolor">Ashapurna Buildcon Ltd. was envisaged and founded by Shri Karan Singh Uchiyarda a visionary with crystal clear foresight and blessed with a strong sense of business acumen. Karan Singh Uchiyarda is a practical man and with his sharp visualization has set forth an enviable legacy. “There is a certain divinity that shapes all ends”. His past projects have all been very well accepted. Every project speaks the shining story itself. The mission statement of the company is “WHERE DREAMS MEET REALITY”.. Ashapurna always tries for the best quality housing at a minimum and reasonable cost which otherwise may not be possible if a customer builds his own house. Shri Karan Singh Uchiyarda with his zeal and enthusiasm to work for the social upliftment of poor people has established a trust named ‘Shree Mag Mohan Charitable Trust’, which, with the association of Ashapurna Buildcon Ltd. works for the welfare of the general public by organizing medical camps, social events like large scale marriage functions, housing and other donations to poor and needy people, charitable activities etc. Ashapurna has the best talents on its staff rolls. It also has its self-integrated modern state-of-art infrastructure to support the manpower. Highly skilled intelligent architects have to date produced real wonders; their scintillating and stunning designs have captivated and awed many people in Rajasthan. Ashapurna has redefined the Building and Construction Business with unique modern designs and preserving the rich heritage and the traditional and cultural values of India. It is obvious to conclude that the group has in its humble way tried to enrich the quality of life and living standards of the people in general. For customers, Ashapurna Constructs has a wide range of requirements and offers the best suitable options.</p>
                            <img src={quote} alt="" className="img-fluid position-absolute" />
                            <button className="wbtn mt-5">Read More</button>
                           

                        </div>
                    </div>
                    <div className="col-lg-6 col-12 py-3 px-5 order-lg-1 order-0 ">
                        <div className="board-img ">
                            <img src={member1} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mb-lg-5">
                <div className="col-lg-6 col-12 py-3 px-5">
                        <div className="board-img ">
                            <img src={member2} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 p-3">
                        <div className="board-info position-relative p-3">
                            <span>CMD</span>
                            <div className="spanborder"></div>
                            <h3 className="hcolor pb-3">Shri Karan Singh Uchiyarda</h3>
                            <p className="pcolor">Ashapurna Buildcon Ltd. was envisaged and founded by Shri Karan Singh Uchiyarda a visionary with crystal clear foresight and blessed with a strong sense of business acumen. Karan Singh Uchiyarda is a practical man and with his sharp visualization has set forth an enviable legacy. “There is a certain divinity that shapes all ends”. His past projects have all been very well accepted. Every project speaks the shining story itself. The mission statement of the company is “WHERE DREAMS MEET REALITY”.. Ashapurna always tries for the best quality housing at a minimum and reasonable cost which otherwise may not be possible if a customer builds his own house. Shri Karan Singh Uchiyarda with his zeal and enthusiasm to work for the social upliftment of poor people has established a trust named ‘Shree Mag Mohan Charitable Trust’, which, with the association of Ashapurna Buildcon Ltd. works for the welfare of the general public by organizing medical camps, social events like large scale marriage functions, housing and other donations to poor and needy people, charitable activities etc. Ashapurna has the best talents on its staff rolls. It also has its self-integrated modern state-of-art infrastructure to support the manpower. Highly skilled intelligent architects have to date produced real wonders; their scintillating and stunning designs have captivated and awed many people in Rajasthan. Ashapurna has redefined the Building and Construction Business with unique modern designs and preserving the rich heritage and the traditional and cultural values of India. It is obvious to conclude that the group has in its humble way tried to enrich the quality of life and living standards of the people in general. For customers, Ashapurna Constructs has a wide range of requirements and offers the best suitable options.</p>
                            <img src={quote} alt="" className="img-fluid position-absolute" />
                            <button className="wbtn mt-5">Read More</button>
                           

                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}
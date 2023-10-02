import { Link, useActionData } from "react-router-dom";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import "./Contact.css";
import banner from "./contactimages/conatactbanner.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap, faMapLocation, faMapMarked, faMapSigns, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { BaseURL } from "./BaseURL";
import axios, { toFormData } from "axios";

import { useEffect, useState } from "react";

export function Contact(){
    let[editUser,setEditUser]=useState({
        name:'',
        email:'',
        mobile:'',
        password:'',
        id:''
    });
    let[user,setUser]=useState([]);

    let handleData=(e)=>{
        let APIURL=BaseURL+'saveUser.php';
        let userData={
        'name':e.target.name.value,
        'email':e.target.email.value,
        'mobile':e.target.mobile.value,
        'password':e.target.password.value,
        'id':editUser.id
      }
      axios.post(APIURL, toFormData(userData))
      .then(function (response) {
        console.log(response);
        getData();
    })
      .catch(function (error) {
        console.log(error);
      });
      getData();
      e.target.reset();
      e.preventDefault();
     
    }

    let getData=(param='')=>{
        let APIURL;
        if(param===''){
            APIURL=BaseURL+'viewUser.php';
        }   
        else{
            APIURL=BaseURL+'viewUser.php?sname='+param;
        }
     
      axios.get(APIURL)
      .then(function (response) {
        console.log(response.data.dataList);
       setUser(response.data.dataList)
      })
      .catch(function (error) {
        console.log(error);
      });
     
    }


    useEffect(()=>{
        getData();
    },[])
    
    let searchData=(e)=>{
        let sValue=e.target.value;
        getData(sValue)
    }

    let deleteRow=(id)=>{
        let dURL=BaseURL+'deleteUser.php';
        axios.get(dURL,{
            params:{
                enid:id
            }
        })
        .then((res)=>{
            console.log(res);
            getData();
        })
    }

    let EditRow=(editID)=>{
        let  APIURL=BaseURL+'viewUser.php?editId='+editID;
        axios.get(APIURL)
        .then(function (response) {
            console.log(response.data.dataList);
            setEditUser({
                name:response.data.dataList.en_name,
                email:response.data.dataList.en_email,
                mobile:response.data.dataList.en_contact,
                password:response.data.dataList.en_password,
                id:response.data.dataList.en_id
            })
           
             window.scrollTo(0,0);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    let updateInputData=(e)=>{
        let data={...editUser};
        data[e.target.name]=e.target.value;
        
        setEditUser(data);

        getData();
       
    }


    let showDataTable=user.map((v,i)=>{
       
        return(
            <tr>
            <th scope="row">{v.en_id}</th>
            <td>{v.en_name}</td>
            <td>{v.en_email}</td>
            <td>{v.en_contact}</td>
            <td>{v.en_password}</td>
            <td>
                <button className="mb-2" onClick={()=>deleteRow(v.en_id)}>Delete</button><br/>
                <button onClick={()=>EditRow(v.en_id)}>Edit</button>
            </td>
            </tr>
        )
            
    })

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
                                                <Link to={'/contact-us'}>Contact Us</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2 className="text-white fw-700 fs-35 text-center text-capitalize">Contact Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                       <div className="col-lg-12 p-3">
                            <div className="text-center ">
                                <h2 className="fs-35 fw-600 hcolor pt-3">Get In Touch</h2>
                                <p className="fs-14 pcolor py-3">To request a quote, contact us directly or fill out the form and we will get back to you promptly.</p>
                            </div>  
                       </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-12 p-3">
                            <div className="contact-info rounded d-flex justify-content-center align-items-center py-3">
                                <div className="social-icon  fs-22 text-white fs-30 d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </div>
                                <div className="ms-4 pe-2">
                                    <h5 className="hcolor fw-800">Email</h5>
                                    <p className="text-white fs-14  mb-0">
                                        marketing@ashapurna.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 p-3">
                            <div className="contact-info rounded d-flex justify-content-center align-items-center py-3">
                                <div className="social-icon ms-3 fs-22 text-white fs-30 d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </div>
                                <div className="ms-4 pe-2">
                                    <h5 className="hcolor fw-800">Address</h5>
                                    <p className="text-white fs-14  mb-0">
                                         Circuit House Road, Opposite LIC Office, Jodhpur, Rajasthan 342006
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 p-3">
                            <div className="contact-info rounded d-flex justify-content-center align-items-center py-3">
                                <div className="social-icon  fs-22 text-white fs-30 d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faPhone}/>
                                </div>
                                <div className="ms-4">
                                    <h5 className="hcolor fw-800">Phone</h5>
                                    <p className="text-white fs-14  mb-0">
                                        marketing@ashapurna.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="container-fluid">
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-6 col-12 p-3">
                        <div className="mb-5 mb-lg-0">
                            <h2 className="hcolor fs-26 text-capitalize mb-20">Find us on Map</h2>
                            <div className="p-2 rounded">
                            
                                <iframe className="rounded" width="100%" height="440px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.47003725813!2d76.29509232442565!3d29.327217552198054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391204ebc9aa271b%3A0x2798f46a923012d8!2sPatel%20Nagar%2C%20Ishwar%20Nagar%2C%20Patiala%20Chowk%2C%20Jind%2C%20Julani%2C%20Haryana%20126102!5e0!3m2!1sen!2sin!4v1693934200132!5m2!1sen!2sin" title="
                                Learning Point Jind,126102" aria-label="Learning Point Jind,126102"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 p-3 mt-3">
                            <div className="contact-form position-relative rounded p-3">
                                <span>Write to Us!</span>
                                <div className="spanborder"></div>
                                <h3 className="hcolor fs-22 text-capitalize fw-900 ">Have A Question?</h3>
                                <form onSubmit={handleData}>
                                    <div className="row g-3">
                                    <div className="col-md-6">
                                        <label for="your-name" className="form-label">Your Name</label>
                                        <input value={editUser.name} onChange={updateInputData} type="text"  className="form-control" name="name" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="your-surname" className="form-label">Your Phone</label>
                                        <input value={editUser.mobile} onChange={updateInputData} type="text" className="form-control"  name="mobile" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="your-surname" className="form-label">Your Email</label>
                                        <input value={editUser.email} onChange={updateInputData} type="text"  className="form-control"  name="email" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="your-subject" className="form-label">Password</label>
                                        <input value={editUser.password} onChange={updateInputData} type="text" className="form-control" name="password"/>
                                    </div>
                                    <div className="col-12">
                                        <label for="your-message" className="form-label">Your Message</label>
                                        <textarea className="form-control" id="your-message" name="your-message" rows="5" required/>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                        <div className="col-md-6">
                                            <button type="submit" className="btn cform-btn w-100 fw-bold" >
                                            {editUser.id===""?"Send Data":"Update Data"}
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

        <section>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mx-auto p-3">
                        <input type="text" placeholder="Search By Name" className="search-box" onChange={searchData}/>
                            <div className="table-info">
                                
                            <table className="table table-bordered table-hover">
                                    <thead className="thead">
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Password</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        (showDataTable.length>0) ?
                                        showDataTable
                                        :
                                        "No Data Found"
                                    }   
                                    </tbody>
                                    </table>
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
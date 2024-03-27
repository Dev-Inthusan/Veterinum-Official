// import React from "react";
import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
 
const Contact = () => {

const [msg, setMsg] = useState({
    name : "",
    email : "",
    message : ""
});

// handle input
const handleChange = (event) =>{
    let name = event.target.name;
    let  value = event.target.value;

    setMsg({...msg, [name]:value});

}

//    handle submit
const handleSubmit = async (event)=>{
    event.preventDefault();
    // object De structuring
    const {name, email, message} = msg;
    try{
        // it's submitted on 3000by default
        // we need to submit to backend on 3001,need proxy
        const res = await fetch('/message', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name, email, message
            })
        })
        
     if(res.status === 400 || !res){
        window.alert("MSG not sent, try again")
     }else{
        
        // restart the server for proxy works

        window.alert("Msg sent");
        setMsg({
            name : "",
            email : "",
            message : ""
        }) 

     }


    } catch (error) {
        console.log(error);

    }

 }

    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact</h3>
                            <h1 className="display-6 text-center mb-4"><span className="purple-text">
                               You Have any </span>
                                {' '}  <b className="pink-text">
                                <span className="pink-text"></span> Questions? </b>
                                {/* Services */}
                                </h1>
                            {/* <hr className="w-25 mx-auto" /> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="../../../images/cont.jpg" alt="contact" className="w-75" />
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit} method="POST">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="eg---Cristiano"
                                     name="name"
                                     value={msg.name}
                                     onChange={handleChange}
                                     />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input type="text" class="form-control" id="name" placeholder="eg---youremail@.com"
                                    name="email"
                                    value={msg.email}
                                    onChange={handleChange}
                                     />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Your msg</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                    name="message"
                                    value={msg.message}
                                    onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-pink rounded-pill px-3">Send msg <i className="fa fa-paper-plane ms-2"></i></button>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>

        </div>
    )

}
export default Contact;
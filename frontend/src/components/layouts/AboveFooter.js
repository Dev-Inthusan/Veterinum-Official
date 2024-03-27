// import React from "react";

// export default function AboveFooter() {
//     return (
//         <abovefooter className="abovefooter container container-fluid  d-flex  justify-content-center">
//             <div className="mb-4">
//                 <div className="row">
//                     <div className="col-md-6 ">
//                         <h5>Veterinum</h5>
//                         <p>Veterinum Provides Precious Service For Pets,
//                             You can Save Your Pets Lives immediately and easily</p>
//                     </div>
//                     <div className="col-md-6">
//                         <h5>Contact Us</h5>
//                         <p>123 Naavalar Street, Nungampaakkam,Srilanka</p>
//                         <p>Email: veterinum24@gmail.com</p>
//                         <p>Phone: +94 751234567</p>
//                     </div>
//                 </div>
//                 {/* <div className="row justify-content-center">
//                     <div className="col-md-6 text-center">
//                         <p>
//                             Follow us on:
//                             <a href="https://google.com" className="social-icon"><i className="fab fa-google"></i></a>
//                             <a href="https://linkedin.com" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
//                             <a href="https://youtube.com" className="social-icon"><i className="fab fa-youtube"></i></a>
//                         </p>
//                     </div>
//                 </div> */}
//             </div>
//         </abovefooter>
//     );
// }            

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare,  FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
// import { FaAddressCard } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { RiUserFollowFill } from "react-icons/ri";
import { SiQuicklook } from "react-icons/si";
import { MdContactPhone } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
// import { FaSnapchat } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";














export default function AboveFooter() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5><SiQuicklook />   Quick Links</h5>
                        <ul>
                            <li><Link to="/"><IoMdHome />  Home</Link></li>
                            <li><Link to="/about"><FcAbout />   About</Link></li>
                            <li><Link to="/contact"><FcBusinessContact />  Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5><RiUserFollowFill />    Follow Us On</h5>
                        <div className="social-icons">
                            <a href="https://facebook.com"><FaFacebookSquare /></a>
                            <a href="https://twitter.com"><FaSquareXTwitter /></a>
                            <a href="https://instagram.com"><FaInstagram /></a>
                            <a href="https://tiktok.com"><FaTiktok /></a>
                            <a href="https://youtube.com"><FaYoutube /></a>
                            <a href="https://youtube.com"><FaSnapchatGhost /></a>
                            <a href="https://youtube.com"><FaLinkedin /></a>
                            <a href="https://youtube.com"><FaMedium /></a>



                        </div>
                    </div>
                    <div class="col-md-4 contact-info mb-3">
                        <h5 className='pink-text'><MdContactPhone />  Contact Us</h5>
                        <ul>
                            <li class="pink-text"><SiGmail />       <a href="mailto:veterinum24@gmail.com">   veterinum24@gmail.com</a></li>
                <li class="pink-text"> <FaPhone />       <a href="tel:+1234567890">  +94 1234567890</a></li>
                            <li className='pink-text'> <FaLocationArrow />             123 Main Street, Jaffna, Srilanka</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="footer-bottom text-center text-white mb-0 mt-4">
                <p>&copy; {new Date().getFullYear()} Veterinum. All rights reserved.</p>
            </div>
        </footer>
    );
}

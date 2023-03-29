import React from 'react';
import {Link} from 'react-router-dom'
import mail_icon from '../../assets/img/mail-icon.png'
import call_icon from '../../assets/img/call-icon.png'
import map_icon from '../../assets/img/map-icon.png'
import facebook from '../../assets/img/facebook.svg'
import twitter from '../../assets/img/twitter.svg'
import linkedin from '../../assets/img/linkedin.svg'
import pinterest from '../../assets/img/pinterest.svg'

function Footer() {
    return (
      <>
    <div class="footer_section">
         <div class="container">
            <div class="footer_location_text">
               <ul>
                      <li><img src={map_icon} /><span class="padding_left_10"><a href="#">Loram Ipusm hosting web</a></span></li>
                  <li><img src={call_icon} /><span class="padding_left_10"><a href="#">Call : +7586656566</a></span></li>
                  <li><img src={mail_icon} /> <span class="padding_left_10"><a href="#">demo@gmail.com</a></span></li>
               </ul>
            </div>
            <div class="row">
               <div class="col-lg-3 col-sm-6">
                  <h2 class="useful_text">Useful link </h2>
                  <div class="footer_menu">
                     <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/shop">Our Designe</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                     </ul>
                  </div>
               </div>
               <div class="col-lg-3 col-sm-6">
                  <h2 class="useful_text">Repair</h2>
                  <p class="lorem_text">Lorem ipsum dolor sit amet, consectetur  adipiscinaliqua  Loreadipiscing </p>
               </div>
               <div class="col-lg-3 col-sm-6">
                  <h2 class="useful_text">Social Media</h2>
                  <div id="social">
                         <a class="facebookBtn smGlobalBtn active" href="#" >
                            <img src={facebook} />
                     </a>
                         <a class="twitterBtn smGlobalBtn" href="#" >
                         <img src={twitter} />
                     </a>
                         <a class="googleplusBtn smGlobalBtn" href="#" >
                         <img src={linkedin} />
                     </a>
                         <a class="linkedinBtn smGlobalBtn" href="#" >
                         <img src={pinterest} />
                     </a>
                  </div>
               </div>
               <div class="col-sm-6 col-lg-3">
                  <h1 class="useful_text">Our Repair center</h1>
                  <p class="footer_text">Lorem ipsum dolor sit amet, consectetur adipiscinaliquaLoreadipiscing </p>
               </div>
            </div>
         </div>
      </div>
      
    <div class="copyright_section">
         <div class="container">
            <p class="copyright_text">2023 All Rights Reserved. Design by <a href="https://sajjad-hasan.netlify.com" target={'_blank'}>Sajjad Hasan</a></p>
         </div>
      </div>
            
    </>
  )
}

export default Footer

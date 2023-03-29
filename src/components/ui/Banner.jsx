import React from 'react';
import Image1 from '../../assets/img/img-1.png';


function Banner() {
  return (
          
          <div class="banner_section layout_padding">
          <div id="main_slider" class="carousel slide">
             <div class="carousel-inner">
                <div class="carousel-item active">
                   <div class="container">
                      <div class="row">
                         <div class="col-md-6">
                            <h1 class="banner_taital">Best <br /> Design <br />of Furnitur</h1>
                            <p class="banner_text">It is a long established fact that a reader will bedistracted by the readable content of </p>
                            <div class="btn_main">
                               <div class="contact_bt"><a href="#" class="link">Contact US</a></div>
                            </div>
                         </div>
                         <div class="col-md-6">
                            <div class="image_1"><img src={Image1} class="img-fluid" /></div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
       
  )
}

export default Banner
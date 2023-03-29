import React from 'react';
import map from '../../assets/img/maps.png';

function Contact() {
  return (
    <div class="contact_section layout_padding">
         <div class="container">
            <div class="contact_section_2">
               <div class="row">
                  <div class="col-md-6">
                     <div class="mail_section_1">
                        <h1 class="contact_taital">Contact Us</h1>
                        <input type="text" class="mail_text" placeholder="Name" name="text" />
                        <input type="text" class="mail_text" placeholder="Email" name="text" />
                        <input type="text" class="mail_text" placeholder="Phone Number" name="text" />
                        <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                        <div class="send_bt"><a href="#">SEND</a></div>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="map_main">
                        <div class="map-responsive">
                          
                          <img src={ map } className="img-fluid" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
  )
}

export default Contact

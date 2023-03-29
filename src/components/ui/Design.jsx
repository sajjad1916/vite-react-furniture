import React from 'react';
import Img_3 from '../../assets/img/img-3.png'
import Img_4 from '../../assets/img/img-4.png'
import Img_5 from '../../assets/img/img-5.png'



function Design() {
  return (
    <div class="design_section layout_padding">
         <div id="my_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <div class="container">
                     <h1 class="design_taital">Our Work Furniture</h1>
                     <p class="design_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteratio</p>
                     <div class="design_section_2">
                        <div class="row">
                           <div class="col-md-4">
                              <div class="box_main">
                                 <p class="chair_text">Chair 01</p>
                                          <div class="image_3" href="#"><img src={ Img_3 } /></div>
                                 <p class="chair_text">Price $100</p>
                                <div class="buy_bt"><a href="#">Buy Now</a></div>
                             
                             </div>
                          
                           </div>
                           <div class="col-md-4">
                              <div class="box_main">
                                 <p class="chair_text">Chair 02</p>
                                          <div class="image_4" href="#"><img src={ Img_4} /></div>
                                 <p class="chair_text">Price $100</p>
                                 <div class="buy_bt"><a href="#">Buy Now</a></div>
                              </div>
                           </div>
                           <div class="col-md-4">
                              <div class="box_main">
                                 <p class="chair_text">Table</p>
                                          <div class="image_4" href="#"><img src={ Img_5} /></div>
                                 <p class="chair_text">Price $100</p>
                                 <div class="buy_bt"><a href="#">Buy Now</a></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               
            </div>
         </div>
         <div class="container">
            <div class="read_bt"><a href="#">Read More</a></div>
         </div>
      </div>
  )
}

export default Design

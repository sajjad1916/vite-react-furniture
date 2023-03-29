import React from 'react';
import Image2 from '../../assets/img/img-2.png';


function About() {
  return (
    <div class="about_section layout_padding">
    <div class="container">
       <div class="about_section_2">
          <div class="row">
             <div class="col-md-6">
                <div class="image_2"><img src={Image2} /></div>
             </div>
             <div class="col-md-6">
                <h1 class="about_taital">About Us</h1>
                <p class="about_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised </p>
                <div class="readmore_bt"><a href="#">Read More</a></div>
             </div>
          </div>
       </div>
    </div>
 </div>
  )
}

export default About

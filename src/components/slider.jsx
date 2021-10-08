import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./slider.css";

function slider() {
   return (
      <>
         <Carousel className="size" id="slider">
            <Carousel.Item className="slider-wrap">
               <img
                  className="d-block"
                  src="https://aldf.org/wp-content/uploads/2018/05/lamb-iStock-665494268-16x9-e1559777676675-1200x675.jpg"
                  alt="First slide"
               />
               <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                     Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img className="d-block" src="https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg" alt="Second slide" />

               <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block"
                  src="https://www.iata.org/contentassets/d7c512eb9a704ba2a8056e3186a31921/cargo_live_animals_parrot.jpg?w=330&h=200&mode=crop&scale=both&v=20191213012337"
                  alt="Third slide"
               />

               <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                     Praesent commodo cursus magna, vel scelerisque nisl
                     consectetur.
                  </p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </>
   );
}

export default slider;

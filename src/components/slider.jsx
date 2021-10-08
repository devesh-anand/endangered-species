import React from "react";
import { Carousel } from "react-bootstrap";
import "./slider.css";

function slider() {
   return (
      <>
         <Carousel className="size" id="slider">
            <Carousel.Item className="slider-wrap">
               <img
                  className="d-block carousel-img"
                  src="https://cdn.britannica.com/39/75639-050-07D5CA0D/Bengal-tiger-cubs.jpg"
                  alt="First slide"
               />
               <Carousel.Caption>
                  <h3>Bengal Tigers</h3>
                  <p>
                     Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img className="d-block carousel-img" src="https://media.savetherhino.org/prod/uploads/2018/04/Indian-one-horned-rhino-with-calf-Kaziranga-India_SAToon.jpg" alt="Second slide" />

               <Carousel.Caption>
                  <h3>One Horned Rhino</h3>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block carousel-img"
                  src="http://img2.chinadaily.com.cn/images/201906/20/5d0a88b9a3103dbf57a55793.jpeg"
                  alt="Third slide"
               />

               <Carousel.Caption>
                  <h3>The Asian Elephant</h3>
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

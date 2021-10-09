import React from "react";
import { Carousel } from "react-bootstrap";
import "./slider.css";
import TypeWriterEffect from 'react-typewriter-effect';

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
                  <h1>Bengal Tigers</h1>
                  <p>
                     <TypeWriterEffect
                        textStyle={{
                           fontFamily: 'Arial',
                           color: 'white',
                           fontWeight: 500,
                           fontSize: '1.25rem',
                        }}
                        startDelay={2000}
                        cursorColor="#3F3D56"
                        multiText={[
                           'About 3000 left,',
                           'And still decreasing',
                        ]}
                        multiTextDelay={2000}
                        typeSpeed={80}
                        />
                  </p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img className="d-block carousel-img" src="https://media.savetherhino.org/prod/uploads/2018/04/Indian-one-horned-rhino-with-calf-Kaziranga-India_SAToon.jpg" alt="Second slide" />
               <Carousel.Caption>
                  <h1>One Horned Rhino</h1>
                  <p>
                     <TypeWriterEffect
                        style={"font-size: 16px;"}
                        textStyle={{ 
                              fontFamily: 'Arial',
                              color: 'white',
                              fontWeight: 500,
                              fontSize: '1.25rem', 
                           }}
                        startDelay={300}
                        cursorColor="black"
                        text="Only 3,000 left, and still going down"
                        typeSpeed={100}
                     />
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
                  <h1>The Asian Elephant</h1>
                  <p>
                     <TypeWriterEffect
                        style={"font-size: 16px;"}
                        textStyle={{
                           fontFamily: 'Arial',
                           color: 'white',
                           fontWeight: 500,
                           fontSize: '1.25rem',
                        }}
                        startDelay={500}
                        cursorColor="black"
                        text="30,000 remaining, are poached for their ivory and skin"
                        typeSpeed={150}
                     />
                  </p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </>
   );
}

export default slider;

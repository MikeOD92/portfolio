import React, {useState} from 'react'
import {Container, Carousel, Image} from 'react-bootstrap'

export default function Portfoliocard(props) {

  const [index, setIndex] = useState(0);
  const handleCarousel = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <Container fluid className='py-5'>
      <h3 className='mb-3'>{props.data.title}</h3>
      <h4 className='mb-3'> {props.data.subTitle}</h4>
      {props.data.img.length > 1? (
        <Carousel fade activeIndex={index} onSelect={handleCarousel} className='mb-3'>
              {props.data.img.map(img => {
                return(
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src={`${img}`}
                      alt={`${props.data.title} thumbnail`}
                      />
                  </Carousel.Item>
                )
              })}
            </Carousel>
            ): 
                <Image 
                className='d-block w-100 mb-3'
                src={props.data.img[0]}
                alt={`${props.data.title} thumbnail`}
              />
              }

      {props.data.p1? <p className='mb-3'>{props.data.p1}</p> : ""}
      {props.data.p2? <p className='mb-3'>{props.data.p2}</p> : ""}

      {props.data.sitelink? <a href={props.data.sitelink} className='mb-3'> {props.data.title} </a> : ""}
      {props.data.git? <a href={props.data.git}> Git Repo</a> : ""}
      

    </Container>
  )
}

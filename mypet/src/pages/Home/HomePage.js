import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { getAllPublications } from './../../redux/actions/getPublcationActions';

const HomePageComp = () => {
  const token = useSelector((state) => state.users);
  const dispatch = useDispatch()
  const publications = useSelector(state => state.publication.publications)

  useEffect(() => {
    dispatch(getAllPublications())
  },[dispatch])


  return (
    <div>
      <Carousel
        style={{
          opacity: 3,
          position: "relative",
          marginLeft: "20rem",
          width: "60%",
        }}
      >
        {publications.map((item , index) => {
          return <Carousel.Item key={index}>
            <img
            className="d-block w-100"
            src={item.picture}
            alt={item.header}
            />
            <Carousel.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0.61)', padding: '2rem' , width : '50%' , marginLeft : "auto" , marginRight : "auto"}}>
            <h3>{item.header}</h3>
            <p>{item.text}</p>
            <Button>Go to Publication</Button>
            </Carousel.Caption>
          </Carousel.Item>
        })}
      </Carousel>
    </div>
  );
};

export default HomePageComp;

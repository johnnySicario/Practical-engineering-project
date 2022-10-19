import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Publication(props) {
  const navigate = useNavigate()

  return (
    <div>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary" style={{ marginTop: "0.5rem" }} onClick={() => navigate('/AddPublication')}>Add publication</button>
      </div>
      <Carousel style={{ opacity : 3 , position : 'relative' , marginLeft : 'auto' , marginRight : "auto" , width : "45%" }}>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Publication;
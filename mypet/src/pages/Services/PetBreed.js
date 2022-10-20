import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { api } from './../api';


function PetBreed(props) {
  const auth = useSelector(state => state.auth.auth)
  const navigate = useNavigate()
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let resp = await axios.get(`${api}/PetBreed`)
      setNews(resp.data)
    }

    fetchData();
  }, [news])

  const deleteNew = async (id) => {
    await axios.delete(`${api}/PetBreed/${id}`)
    let filternew = news.filter(item => item._id !== id)
    setNews(filternew);
  }

  let newsCard = news.map((data, index) => {
    return (
      <Col key={"Card"+index+"petBreed"}>
        {auth.admin?<input type="button" value="delete" onClick={() => deleteNew(data._id)} />:null}
        <Card style={{ width: '18rem', marginBottom: '4rem' }}>
          <Card.Img variant="top" src={data.picture} />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.text}</Card.Text>
            <Button variant="primary"><a href={data.link} target="_blank" style={{color:"white"}}> {data.linktext} </a></Button>
          </Card.Body>
        </Card>
      </Col>
    )
  })

  return (
    <div>
      {auth.admin ? <input type="button" value="add New"
        onClick={() => { navigate('/AddPetBreed') }}
      /> : null} <br />
      <Container>
        <Row>
          {newsCard}
        </Row>
      </Container>

    </div>
  );
}

export default PetBreed;
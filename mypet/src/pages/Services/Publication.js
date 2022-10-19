import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Accordion from 'react-bootstrap/Accordion';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPublications } from './../../redux/actions/getPublcationActions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Publication = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const publications = useSelector(state => state.publication.publications)

  useEffect(() => {
    dispatch(getAllPublications())
  },[dispatch])

  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary" style={{ marginTop: "0.5rem" }} onClick={() => navigate('/AddPublication')}>Add publication</button>
      </div>
      {
        publications.map((i , index) => {
          return <Accordion key={i._id}>
          <Accordion.Item eventKey={index}>
            <Accordion.Header>{i.header}</Accordion.Header>
            <Accordion.Body>
              <Row xs='auto'>
                <Col>
                  <img style={{width: '100px', height: '100px', objectFit: 'cover'}} alt={i.header} src={i.picture}/>
                </Col>
                <Col>
                <h4>{i.name}</h4>
                <p>{i.text}</p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        })
      }
    </div>
  );
}

export default Publication;
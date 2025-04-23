import React from 'react';
import {Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/Cards.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


const Cards = ({ id ,icon, title, paragraph, link}) => {
 
  return (
<Col xs={12} sm={12} md={12} lg={4} xl={4} className="card-col">
  <Card className='card'>
    <div className="top_cards">
      <div className="icon-container">
        <img src={icon} className='cards_icon' />
      </div>
      <h3>{`0${id + 1}`}</h3>
    </div>

    <div className="card-body-wrapper">
      <Card.Title className='cards_title'>{title}</Card.Title>
      <Card.Text className='cards_para'>{paragraph}</Card.Text>
      <div className="cards_link">
        <Link to="/">{link}</Link>
      </div>
    </div>
  </Card>
</Col>
  );
}

export default Cards;

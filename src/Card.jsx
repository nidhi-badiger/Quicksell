// src/components/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ id,title, description }) => (
  <div className="card">
    <div className='text'>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
  </div>
);

Card.propTypes = {
  id:PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;

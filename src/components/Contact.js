import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return(
    <div>
      <div 
        className='ui raised very padded text container segment'
        style={{marginTop:'80px'}}
      >
        <Link to='/card/Sian' className='ui header'>Sian</Link>
        <p>Some placeholder text</p>
      </div>
      <div 
        className='ui raised very padded text container segment'
        style={{marginTop:'80px'}}
      >
        <Link to='/card/David' className='ui header'>David</Link>
        <p>Some placeholder text</p>
      </div>
    </div>
  )
}

export default Contact;
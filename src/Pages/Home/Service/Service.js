import React from 'react';
import {useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, price, description, img} = service;
    const navigate = useNavigate()
    const navigateToServiceDetails = (id) =>{
        navigate(`service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetails(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;
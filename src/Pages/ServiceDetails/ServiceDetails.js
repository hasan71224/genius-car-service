import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    useEffect(()=>{
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then (res => res.json())
        .then (data => setService(data))
    },[])
    return (
        <div>
            <Helmet>
                <title>Service Details - Genius Car Service</title>
            </Helmet>
            <h3>This is service details: {service.name}</h3>
            <Link to='/checkout'>
                <div className='text-center'>
                    <Button className='btn btn-primary'>Proceed CheckOut</Button>
                </div>
            </Link>
        </div>
    );
};

export default ServiceDetails;
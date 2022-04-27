import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../hook/useServiceDetails';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId)
    return (
        <div>
            <Helmet>
                <title>Service Details - Genius Car Service</title>
            </Helmet>
            <h3>This is service details: {service.name}</h3>
            <Link to={`/checkout/${serviceId}`}>
                <div className='text-center'>
                    <Button className='btn btn-primary'>Proceed CheckOut</Button>
                </div>
            </Link>
        </div>
    );
};

export default ServiceDetails;
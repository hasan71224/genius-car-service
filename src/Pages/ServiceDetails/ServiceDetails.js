import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h3>This is service details: {serviceId}</h3>
            <Link to='/checkout'>
                <div className='text-center'>
                    <Button className='btn btn-primary'>Proceed CheckOut</Button>
                </div>
            </Link>
        </div>
    );
};

export default ServiceDetails;
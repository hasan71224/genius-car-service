import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch("https://radiant-fortress-18374.herokuapp.com/service")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id='services' className='container'>
            <h1 className='text-primary text-center services-title mt-5 mb-3'>Our Services: {services.length}</h1>
            <div className='services-container'>
            {
                services.map(service=> <Service
                    key={service._id}
                    service={service}
                >

                </Service>)
            }
            </div>
        </div>
    );
};

export default Services;
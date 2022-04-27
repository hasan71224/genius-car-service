import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hook/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetails(serviceId);
    const [user] = useAuthState(auth);
    
    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://radiant-fortress-18374.herokuapp.com/order', order)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast("Your Order is Booked!!!")
                event.target.reset();
            }
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <Helmet>
                <title>CheckOut - Genius Car Service</title>
            </Helmet>
            <h2>Please CheckOut: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name='name' placeholder='Name' readOnly required/> <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name='email' placeholder='Email' readOnly disabled required/> <br />
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='Service' readOnly required/> <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='Address' autoComplete='off' required/> <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='Phone' required/> <br />
                <input className='btn btn-primary' type="Submit" value="Place Order" /> 
            </form>
        </div>
    );
};

export default CheckOut;
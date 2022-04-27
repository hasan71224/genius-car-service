import React from 'react';
import useService from '../../hook/useServices';

const ManageServices = () => {
    const [services, setServices] = useService();

    const handleDelete = id =>{
        const proceed = window.confirm("Are You Sure?");
        if(proceed){
            const url = `https://radiant-fortress-18374.herokuapp.com/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining)
            })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your services</h2>
            {
                services.map(service=> <div key={service._id}>
                    <h6>{service.name} <button onClick={()=>handleDelete(service._id)}>x</button></h6>
                </div>)
            }
        </div>
    );
};

export default ManageServices;
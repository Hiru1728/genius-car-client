import React, { useEffect, useState } from 'react';
import SevicesCard from './SevicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p></p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* <h2>Services: {services.length}</h2> */}
                {
                    services.map(service => <SevicesCard
                        key={service._id}
                        service={service}
                    ></SevicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;
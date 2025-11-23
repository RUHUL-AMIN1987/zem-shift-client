import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const position = [23.6850, 90.3563];
    const serviceCenter = useLoaderData();
    const mapRef = useRef(null);
    console.log(serviceCenter);
    const handleSearch = (e) =>{
        e.preventDefault();
        const location = e.target.location.value;
        const district = serviceCenter.find( c=> c.district.toLowerCase().includes(location.toLowerCase()));
        if(district){
            const coord =[district.latitude, district.longitude];
            mapRef.current.flyTo(coord, 14);

            console.log(district, coord)
        }
    }
    return (
        <div>
           <h1 className='text-3xl font-bold text-center py-10'>We Are Available In 64 Districts</h1> 
           <div>
               <form onSubmit={handleSearch}>  
                     <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                            >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                    <input type="search" className="grow" 
                    name='location'
                    placeholder="Search" />
                </label>
               </form>
           </div>
           <div className='border w-full h-[860px]'>
                <MapContainer 
                center={position} 
                zoom={8} 
                scrollWheelZoom={false}
                className=' h-[860px]'
                ref = {mapRef}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        serviceCenter.map(center=><Marker key={center.id} position={[center.latitude, center.longitude]}>

                        <Popup>
                            <strong>{center.district}</strong> <br /> Service Area{center.covered_area}
                        </Popup>
                    </Marker>)
                    }
                    
                </MapContainer>
           </div>
        </div>
    );
};

export default Coverage;
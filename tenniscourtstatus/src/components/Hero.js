import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';



export default function Hero() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading Map...</div>;
  return <Map />

  function Map() {
    const centerMarker = useMemo(() => ({lat: 33 , lng: -84}), []);

    return (<>
      


      <div className='w-full h-screen  bg-stone-50 flex flex-col justify-between'>
        <div className='m-auto flex flex-col'>

          <h1 className='bold py-3 text-4xl'>Tennis Court Address</h1>
          <input className='py-1 mb-3 bg-gray-50 border border-gray-300 text-sm rounded-md focus:ring-sky-200 focus:border-sky-200 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-400 dark:placeholder-black dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500' placeholder='Enter Tennis Court Location Here' type="text"></input>
          <button className='text-2xl md:text-3xl bg-sky-800 hover:bg-sky-900 hover:text-white' >Search</button>
        </div>

      </div>
      <GoogleMap mapContainerClassName='w-screen h-screen map mx-auto border rounded ' zoom={10} center={centerMarker}>
        <Marker position={centerMarker}/>
      </GoogleMap>


      
    </>)
  }

  


}

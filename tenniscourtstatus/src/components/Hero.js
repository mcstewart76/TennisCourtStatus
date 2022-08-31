import React, { useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox'
import "@reach/combobox/styles.css";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";


export default function Hero() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading Map...</div>;
  return <Map />

  function Map() {
    const center = useMemo(() => ({ lat: 33, lng: -84 }), []);
    const [selected, setSelected] = useState(null);

    return (
      <>

        <div className='w-full h-screen  bg-stone-50 flex flex-col justify-between'>
          <div className='m-auto flex flex-col'>

            <h1 className='bold py-3 text-4xl'>Tennis Court Address </h1>
            <div>
              <PlacesAutocomplete setSelected={setSelected} />
            </div>

            {/* <input className='py-1 mb-3 bg-gray-50 border border-gray-300 text-sm rounded-md focus:ring-sky-200 focus:border-sky-200 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-400 dark:placeholder-black dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500' placeholder='Enter Tennis Court Location Here' type="text"></input> */}
            <button className='text-2xl md:text-3xl bg-sky-800 hover:bg-sky-900 hover:text-white' >Search</button>
          </div>

        </div>
        <GoogleMap mapContainerClassName='w-screen h-screen map mx-auto border rounded ' zoom={10} center={center}>
          {selected && <Marker position={selected} />}
        </GoogleMap>



      </>
    );
  }

  const PlacesAutocomplete = ({ setSelected }) => {
    const {
      ready,
      value,
      setValue,
      suggestions: { status, data },
      clearSuggestions,

    } = usePlacesAutocomplete();

    const handleSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();

      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setSelected({ lat, lng });
    }

    return (<Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={e => setValue(e.target.value)}
        disabled={!ready}
        className=''
        placeholder='Search an Address'
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) =>
              (<ComboboxOption key={place_id} value={description} />))}
        </ComboboxList>
      </ComboboxPopover>

    </Combobox>);
  }

}

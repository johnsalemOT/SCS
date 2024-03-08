'use client';
import { Loader } from '@googlemaps/js-api-loader';
import { Console } from 'console';
import React, { useEffect, useRef } from 'react'

const Map = () => {

    const mapRef= useRef<HTMLDivElement>(null);

    useEffect(()=>{

        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
                version: 'weekly',
            })
            const {Map} = await loader.importLibrary('maps');
            const {Marker} = await loader.importLibrary('marker') as google.maps.MarkerLibrary;

            const postion = {
                lat: 37.4222,
                lng: -122.084,
            }

            // map optionss
            const mapOptions: google.maps.MapOptions ={
                center: postion,
                zoom: 15,
                mapId: 'Maps API Key',
                disableDefaultUI: true
            }

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

            const marker = new Marker({
                map:map,
                position: postion,
            })
        }
        initMap();
    },[])

  return (
    <div className='h-[300px] w-[503px] rounded-[10px] shadow-custom border-2 border-[#25B4F8]' ref={mapRef}>
    </div>
  )
}

export default Map
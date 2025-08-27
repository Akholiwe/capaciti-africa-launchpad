import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Navigation } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  address: string;
  coordinates: [number, number];
  phone: string;
}

const locations: Location[] = [
  {
    id: 'johannesburg',
    name: 'Johannesburg Branch',
    address: '19 Ameshoff St, Braamfontein, Johannesburg, 2000',
    coordinates: [28.0473, -26.1929],
    phone: '+27 (11) 717 3157'
  },
  {
    id: 'cape-town',
    name: 'Salt River Branch',
    address: '97 Durham Ave, Salt River, Cape Town, 7925',
    coordinates: [18.4741, -33.9249],
    phone: '+27 (21) 409 7000'
  },
  {
    id: 'hazyview',
    name: 'HazyView Capaciti Hollard Campus',
    address: 'HazyView, Mpumalanga',
    coordinates: [31.1206, -25.0448],
    phone: '+27 (13) 737 7000'
  }
];

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [23.0, -29.0], // Center between JHB and CT
      zoom: 6,
    });

    // Add markers for each location
    locations.forEach((location) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="p-2">
          <h3 class="font-bold text-sm">${location.name}</h3>
          <p class="text-xs text-gray-600 mb-2">${location.address}</p>
          <p class="text-xs text-gray-600 mb-2">${location.phone}</p>
          <button 
            onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}', '_blank')"
            class="bg-primary text-white px-2 py-1 rounded text-xs hover:bg-primary/90"
          >
            Get Directions
          </button>
        </div>
      `);

      const marker = new mapboxgl.Marker({
        color: '#2E3A59' // Navy blue from logo
      })
        .setLngLat(location.coordinates)
        .setPopup(popup)
        .addTo(map.current!);
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
  };

  const handleSetToken = () => {
    if (mapboxToken.trim()) {
      setIsTokenSet(true);
      initializeMap();
    }
  };

  const getDirections = (address: string) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-6">
      
      <div className="space-y-6">
        {/* Google Maps Embed */}
        <div className="w-full">
          <Card className="p-0 bg-card border-0 shadow-card overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/d/embed?mid=1CTQkurguAWi7QPBRy8nQVOnjXa_JpY4&ehbc=2E312F&noprof=1" 
              width="100%" 
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
        {/* Location Cards */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-4">
          {locations.map((location) => (
            <Card key={location.id} className="p-6 bg-card border-0 shadow-card">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{location.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{location.address}</p>
                  <p className="text-sm text-muted-foreground">{location.phone}</p>
                </div>
              </div>
              <Button 
                onClick={() => getDirections(location.address)}
                variant="outline" 
                size="sm" 
                className="w-full"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </Card>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
// src/maps/maps.service.ts
import axios from 'axios';

export class MapsService {
  constructor(private apiKey = process.env.GMAPS_KEY!) {}

  async geocodeAddress(fullAddress: string) {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json';
    const { data } = await axios.get(url, {
      params: { address: fullAddress, key: this.apiKey },
    });
    if (data.status !== 'OK' || !data.results[0])
      throw new Error('Endereço não encontrado');
    const loc = data.results[0].geometry.location;
    return { lat: loc.lat, lng: loc.lng };
  }

  async distanceMatrix(origins: string[], destinations: string[]) {
    const url = 'https://maps.googleapis.com/maps/api/distancematrix/json';
    const { data } = await axios.get(url, {
      params: {
        key: this.apiKey,
        origins: origins.join('|'),
        destinations: destinations.join('|'),
        mode: 'driving',
      },
    });
    return data;
  }

  // Opcional: montar URL de navegação
  buildDirectionsDeepLink(waypoints: { lat: number; lng: number }[]) {
    const origin = waypoints[0];
    const dest = waypoints[waypoints.length - 1];
    const wps = waypoints
      .slice(1, -1)
      .map((w) => `${w.lat},${w.lng}`)
      .join('|');
    return `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${dest.lat},${dest.lng}&waypoints=${wps}`;
  }
}

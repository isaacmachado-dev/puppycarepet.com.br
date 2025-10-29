"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapsService = void 0;
const axios_1 = __importDefault(require("axios"));
class MapsService {
    apiKey;
    constructor(apiKey = process.env.GMAPS_KEY) {
        this.apiKey = apiKey;
    }
    async geocodeAddress(fullAddress) {
        const url = 'https://maps.googleapis.com/maps/api/geocode/json';
        const { data } = await axios_1.default.get(url, {
            params: { address: fullAddress, key: this.apiKey },
        });
        if (data.status !== 'OK' || !data.results[0])
            throw new Error('Endereço não encontrado');
        const loc = data.results[0].geometry.location;
        return { lat: loc.lat, lng: loc.lng };
    }
    async distanceMatrix(origins, destinations) {
        const url = 'https://maps.googleapis.com/maps/api/distancematrix/json';
        const { data } = await axios_1.default.get(url, {
            params: {
                key: this.apiKey,
                origins: origins.join('|'),
                destinations: destinations.join('|'),
                mode: 'driving',
            },
        });
        return data;
    }
    buildDirectionsDeepLink(waypoints) {
        const origin = waypoints[0];
        const dest = waypoints[waypoints.length - 1];
        const wps = waypoints
            .slice(1, -1)
            .map((w) => `${w.lat},${w.lng}`)
            .join('|');
        return `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${dest.lat},${dest.lng}&waypoints=${wps}`;
    }
}
exports.MapsService = MapsService;
//# sourceMappingURL=maps.service.js.map
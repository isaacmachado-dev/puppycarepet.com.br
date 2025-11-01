export declare class MapsService {
    private apiKey;
    constructor(apiKey?: string);
    geocodeAddress(fullAddress: string): Promise<{
        lat: any;
        lng: any;
    }>;
    distanceMatrix(origins: string[], destinations: string[]): Promise<any>;
    buildDirectionsDeepLink(waypoints: {
        lat: number;
        lng: number;
    }[]): string;
}

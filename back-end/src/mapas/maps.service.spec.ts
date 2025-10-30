import { Test, TestingModule } from '@nestjs/testing';
import { MapsService } from './maps.service';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('MapsService', () => {
  let service: MapsService;
  const mockApiKey = 'mock_gmaps_api_key';

  beforeEach(async () => {
    process.env.GMAPS_KEY = mockApiKey;

    const module: TestingModule = await Test.createTestingModule({
      providers: [MapsService],
    }).compile();

    service = module.get<MapsService>(MapsService);
    jest.clearAllMocks();
  });

  afterEach(() => {
    delete process.env.GMAPS_KEY;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('geocodeAddress', () => {
    it('should return coordinates for a valid address', async () => {
      const mockResponse = {
        data: {
          status: 'OK',
          results: [
            {
              geometry: {
                location: {
                  lat: -23.5505199,
                  lng: -46.6333094,
                },
              },
            },
          ],
        },
      };

      mockedAxios.get.mockResolvedValue(mockResponse);

      const result = await service.geocodeAddress(
        'Av. Paulista, 1578 - São Paulo, SP',
      );

      expect(result).toEqual({
        lat: -23.5505199,
        lng: -46.6333094,
      });
      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://maps.googleapis.com/maps/api/geocode/json',
        {
          params: {
            address: 'Av. Paulista, 1578 - São Paulo, SP',
            key: mockApiKey,
          },
        },
      );
    });

    it('should throw error for invalid address', async () => {
      const mockResponse = {
        data: {
          status: 'ZERO_RESULTS',
          results: [],
        },
      };

      mockedAxios.get.mockResolvedValue(mockResponse);

      await expect(
        service.geocodeAddress('Endereço inexistente 123456'),
      ).rejects.toThrow('Endereço não encontrado');
    });

    it('should throw error when status is not OK', async () => {
      const mockResponse = {
        data: {
          status: 'REQUEST_DENIED',
          results: [],
        },
      };

      mockedAxios.get.mockResolvedValue(mockResponse);

      await expect(
        service.geocodeAddress('Qualquer endereço'),
      ).rejects.toThrow('Endereço não encontrado');
    });
  });

  describe('distanceMatrix', () => {
    it('should return distance matrix data', async () => {
      const mockResponse = {
        data: {
          origin_addresses: ['São Paulo, SP, Brasil'],
          destination_addresses: ['Rio de Janeiro, RJ, Brasil'],
          rows: [
            {
              elements: [
                {
                  distance: { text: '429 km', value: 429000 },
                  duration: { text: '5 horas 30 min', value: 19800 },
                  status: 'OK',
                },
              ],
            },
          ],
        },
      };

      mockedAxios.get.mockResolvedValue(mockResponse);

      const origins = ['São Paulo, SP'];
      const destinations = ['Rio de Janeiro, RJ'];

      const result = await service.distanceMatrix(origins, destinations);

      expect(result).toEqual(mockResponse.data);
      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://maps.googleapis.com/maps/api/distancematrix/json',
        {
          params: {
            key: mockApiKey,
            origins: 'São Paulo, SP',
            destinations: 'Rio de Janeiro, RJ',
            mode: 'driving',
          },
        },
      );
    });

    it('should handle multiple origins and destinations', async () => {
      const mockResponse = {
        data: {
          rows: [],
        },
      };

      mockedAxios.get.mockResolvedValue(mockResponse);

      const origins = ['São Paulo, SP', 'Campinas, SP'];
      const destinations = ['Rio de Janeiro, RJ', 'Belo Horizonte, MG'];

      await service.distanceMatrix(origins, destinations);

      expect(mockedAxios.get).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          params: expect.objectContaining({
            origins: 'São Paulo, SP|Campinas, SP',
            destinations: 'Rio de Janeiro, RJ|Belo Horizonte, MG',
          }),
        }),
      );
    });
  });

  describe('buildDirectionsDeepLink', () => {
    it('should build a Google Maps directions URL', () => {
      const waypoints = [
        { lat: -23.5505, lng: -46.6333 }, // São Paulo
        { lat: -23.5629, lng: -46.6544 }, // Waypoint 1
        { lat: -23.5489, lng: -46.6388 }, // Waypoint 2
        { lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro
      ];

      const result = service.buildDirectionsDeepLink(waypoints);

      expect(result).toBe(
        'https://www.google.com/maps/dir/?api=1&origin=-23.5505,-46.6333&destination=-22.9068,-43.1729&waypoints=-23.5629,-46.6544|-23.5489,-46.6388',
      );
    });

    it('should handle only origin and destination (no waypoints)', () => {
      const waypoints = [
        { lat: -23.5505, lng: -46.6333 },
        { lat: -22.9068, lng: -43.1729 },
      ];

      const result = service.buildDirectionsDeepLink(waypoints);

      expect(result).toBe(
        'https://www.google.com/maps/dir/?api=1&origin=-23.5505,-46.6333&destination=-22.9068,-43.1729&waypoints=',
      );
    });
  });
});

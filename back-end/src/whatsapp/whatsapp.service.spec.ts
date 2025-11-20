import { Test, TestingModule } from '@nestjs/testing';
import { WhatsAppService } from './whatsapp.service';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('WhatsAppService', () => {
  let service: WhatsAppService;
  const mockPhoneNumberId = '123456789';
  const mockToken = 'mock_token_123';

  beforeEach(async () => {
    process.env.WHATSAPP_PHONE_ID = mockPhoneNumberId;
    process.env.META_TOKEN = mockToken;

    const module: TestingModule = await Test.createTestingModule({
      providers: [WhatsAppService],
    }).compile();

    service = module.get<WhatsAppService>(WhatsAppService);
    jest.clearAllMocks();
  });

  afterEach(() => {
    delete process.env.WHATSAPP_PHONE_ID;
    delete process.env.META_TOKEN;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('sendTemplate', () => {
    it('should send a template message successfully', async () => {
      const mockResponse = {
        data: {
          messaging_product: 'whatsapp',
          contacts: [{ input: '5511999999999', wa_id: '5511999999999' }],
          messages: [{ id: 'wamid.123abc' }],
        },
      };

      mockedAxios.post.mockResolvedValue(mockResponse);

      const result = await service.sendTemplate(
        '5511999999999',
        'hello_world',
        'pt_BR',
      );

      expect(result).toEqual(mockResponse.data);
      expect(mockedAxios.post).toHaveBeenCalledWith(
        `https://graph.facebook.com/v20.0/${mockPhoneNumberId}/messages`,
        {
          messaging_product: 'whatsapp',
          to: '5511999999999',
          type: 'template',
          template: {
            name: 'hello_world',
            language: { code: 'pt_BR' },
            components: undefined,
          },
        },
        {
          headers: { Authorization: `Bearer ${mockToken}` },
        },
      );
    });

    it('should send a template message with components', async () => {
      const mockResponse = {
        data: {
          messages: [{ id: 'wamid.456def' }],
        },
      };

      const components = [
        {
          type: 'body',
          parameters: [{ type: 'text', text: 'João' }],
        },
      ];

      mockedAxios.post.mockResolvedValue(mockResponse);

      const result = await service.sendTemplate(
        '5511999999999',
        'greeting_template',
        'pt_BR',
        components,
      );

      expect(result).toEqual(mockResponse.data);
      expect(mockedAxios.post).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          template: expect.objectContaining({
            components,
          }),
        }),
        expect.any(Object),
      );
    });
  });

  describe('sendText', () => {
    it('should send a text message successfully', async () => {
      const mockResponse = {
        data: {
          messaging_product: 'whatsapp',
          contacts: [{ input: '5511999999999', wa_id: '5511999999999' }],
          messages: [{ id: 'wamid.789ghi' }],
        },
      };

      mockedAxios.post.mockResolvedValue(mockResponse);

      const result = await service.sendText(
        '5511999999999',
        'Olá! Esta é uma mensagem de teste.',
      );

      expect(result).toEqual(mockResponse.data);
      expect(mockedAxios.post).toHaveBeenCalledWith(
        `https://graph.facebook.com/v20.0/${mockPhoneNumberId}/messages`,
        {
          messaging_product: 'whatsapp',
          to: '5511999999999',
          type: 'text',
          text: {
            preview_url: false,
            body: 'Olá! Esta é uma mensagem de teste.',
          },
        },
        {
          headers: { Authorization: `Bearer ${mockToken}` },
        },
      );
    });
  });
});

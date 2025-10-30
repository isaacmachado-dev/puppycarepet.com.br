import { Test, TestingModule } from '@nestjs/testing';
import { MensagensController } from './mensagens.controller';
import { MensagensService } from './mensagens.service';

describe('MensagensController', () => {
  let controller: MensagensController;
  let service: MensagensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MensagensController],
      providers: [
        {
          provide: MensagensService,
          useValue: {
            // mock methods as needed
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<MensagensController>(MensagensController);
    service = module.get<MensagensService>(MensagensService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

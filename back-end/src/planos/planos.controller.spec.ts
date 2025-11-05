import { Test, TestingModule } from '@nestjs/testing';
import { PlanosController } from './planos.controller';
import { PlanosService } from './planos.service';

describe('PlanosController', () => {
  let controller: PlanosController;
  let service: PlanosService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanosController],
      providers: [
        {
          provide: PlanosService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PlanosController>(PlanosController);
    service = module.get<PlanosService>(PlanosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

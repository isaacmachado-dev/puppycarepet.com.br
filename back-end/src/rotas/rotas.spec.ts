import { Test, TestingModule } from '@nestjs/testing';
import { RotasController } from './rotas.controller';
import { RotasService } from './rotas.service';

describe('RotasController', () => {
  let controller: RotasController;
  let service: RotasService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RotasController],
      providers: [
        {
          provide: RotasService,
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
    controller = module.get<RotasController>(RotasController);
    service = module.get<RotasService>(RotasService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

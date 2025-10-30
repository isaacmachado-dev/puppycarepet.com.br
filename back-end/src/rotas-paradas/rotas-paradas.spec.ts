import { Test, TestingModule } from '@nestjs/testing';
import { RotasParadasController } from './rotas-paradas.controller';
import { RotasParadasService } from './rotas-paradas.service';

describe('RotasParadasController', () => {
  let controller: RotasParadasController;
  let service: RotasParadasService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RotasParadasController],
      providers: [
        {
          provide: RotasParadasService,
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
    controller = module.get<RotasParadasController>(RotasParadasController);
    service = module.get<RotasParadasService>(RotasParadasService);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { OrdensServicosController } from './ordens-servicos.controller';
import { OrdensServicosService } from './ordens-servicos.service';

describe('OrdensServicosController', () => {
  let controller: OrdensServicosController;
  let service: OrdensServicosService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdensServicosController],
      providers: [
        {
          provide: OrdensServicosService,
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

    controller = module.get<OrdensServicosController>(OrdensServicosController);
    service = module.get<OrdensServicosService>(OrdensServicosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

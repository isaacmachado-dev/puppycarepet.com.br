import { Test, TestingModule } from '@nestjs/testing';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';

describe('ClientesController', () => {
  let controller: ClientesController;
  let service: ClientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientesController],
      providers: [
        {
          provide: ClientesService,
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

    controller = module.get<ClientesController>(ClientesController);
    service = module.get<ClientesService>(ClientesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

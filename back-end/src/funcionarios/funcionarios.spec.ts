import { Test, TestingModule } from '@nestjs/testing';
import { FuncionariosController } from './funcionarios.controller';
import { FuncionariosService } from './funcionarios.service';

describe('FuncionariosController', () => {
  let controller: FuncionariosController;
  let service: FuncionariosService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuncionariosController],
      providers: [
        {
          provide: FuncionariosService,
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

    controller = module.get<FuncionariosController>(FuncionariosController);
    service = module.get<FuncionariosService>(FuncionariosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';

describe('StatusController', () => {
  let controller: StatusController;
  let service: StatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatusController],
      providers: [
        {
          provide: StatusService,
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

    controller = module.get<StatusController>(StatusController);
    service = module.get<StatusService>(StatusService);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

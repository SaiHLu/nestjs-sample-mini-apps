import { Test, TestingModule } from '@nestjs/testing';
import { ViberController } from './viber.controller';
import { ViberService } from './viber.service';

describe('ViberController', () => {
  let viberController: ViberController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ViberController],
      providers: [ViberService],
    }).compile();

    viberController = app.get<ViberController>(ViberController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(viberController.getHello()).toBe('Hello World!');
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { MessageEngineController } from './message-engine.controller';
import { MessageEngineService } from './message-engine.service';

describe('MessageEngineController', () => {
  let messageEngineController: MessageEngineController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MessageEngineController],
      providers: [MessageEngineService],
    }).compile();

    messageEngineController = app.get<MessageEngineController>(MessageEngineController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(messageEngineController.getHello()).toBe('Hello World!');
    });
  });
});

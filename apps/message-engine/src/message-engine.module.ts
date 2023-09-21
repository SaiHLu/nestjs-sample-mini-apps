import { Module } from '@nestjs/common';
import { MessageEngineController } from './message-engine.controller';
import { MessageEngineService } from './message-engine.service';

@Module({
  imports: [],
  controllers: [MessageEngineController],
  providers: [MessageEngineService],
})
export class MessageEngineModule {}

import { Module } from '@nestjs/common';
import { ViberController } from './viber.controller';
import { ViberService } from './viber.service';

@Module({
  imports: [],
  controllers: [ViberController],
  providers: [ViberService],
})
export class ViberModule {}

import { Body, Controller, Post } from '@nestjs/common';
import { ViberService } from './viber.service';
import { SendMessageDto } from './dto/message.dto';

@Controller('viber')
export class ViberController {
  constructor(private readonly viberService: ViberService) {}

  @Post('message')
  async sendMessage(@Body() body: SendMessageDto) {
    return body;
  }
}

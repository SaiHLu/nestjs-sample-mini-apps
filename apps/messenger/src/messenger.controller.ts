import { Body, Controller, Post } from '@nestjs/common';
import { MessengerService } from './messenger.service';
import { SendMessageDto } from './dto/message.dto';

@Controller('messenger')
export class MessengerController {
  constructor(private readonly messengerService: MessengerService) {}

  @Post('message')
  async sendMessage(@Body() body: SendMessageDto) {
    return body;
  }
}

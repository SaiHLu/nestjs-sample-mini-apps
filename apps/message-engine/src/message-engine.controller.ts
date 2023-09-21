import { Body, Controller, Post, Res } from '@nestjs/common';
import { MessageEngineService } from './message-engine.service';
import { SendMessageDto } from './dto/message.dto';
import { Response } from 'express';

@Controller('message-engine')
export class MessageEngineController {
  constructor(private readonly messageEngineService: MessageEngineService) {}

  @Post('message')
  async sendMessage(@Body() body: SendMessageDto, @Res() response: Response) {
    switch (body.platform) {
      case 'messenger':
        response.redirect(308, 'http://localhost:3001/messenger/message');
        break;

      case 'viber':
        response.redirect(308, 'http://localhost:3002/viber/message');
        break;
    }
  }
}

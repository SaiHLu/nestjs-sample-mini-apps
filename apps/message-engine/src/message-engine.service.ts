import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageEngineService {
  getHello(): string {
    return 'Hello World!';
  }
}

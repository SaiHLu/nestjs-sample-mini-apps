import { Injectable } from '@nestjs/common';

@Injectable()
export class ViberService {
  getHello(): string {
    return 'Hello World!';
  }
}

import { IsString } from 'class-validator';

export class SendMessageDto {
  @IsString()
  platform: 'messenger' | 'viber';

  @IsString()
  type: 'text' | 'emoji' | 'picture' | 'video';
}

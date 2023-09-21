import { IsString } from 'class-validator';

export class SendMessageDto {
  @IsString()
  sender_id: string;

  @IsString()
  txt: string;
}

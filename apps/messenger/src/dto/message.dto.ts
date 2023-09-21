import { IsString } from 'class-validator';

export class SendMessageDto {
  @IsString()
  sender_id: string;

  @IsString()
  receiver_id: string;
}

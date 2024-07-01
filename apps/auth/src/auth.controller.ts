import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'auth-command' })
  handleCommand(data: any) {
    console.log('hello', process.env.DB_HOST);
    return `Processed ${data.data} in Service A`;
  }
}

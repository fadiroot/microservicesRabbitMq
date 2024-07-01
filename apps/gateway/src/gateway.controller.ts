import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
@Controller()
export class GatewayController {
  constructor(
    @Inject('AUTH') private serviceAuth: ClientProxy,
    @Inject('LEAVE') private serviceLeave: ClientProxy,
  ) {}
  @Get()
  getHello(): string {
    return 'hello';
  }
  @Get('auth')
  callServiceAuth() {
    return this.serviceAuth.send(
      { cmd: 'auth-command' },
      { data: 'some data' },
    );
  }
  @Get('leave')
  callServiceLeave() {
    return this.serviceLeave.send(
      { cmd: 'leave-command' },
      { data: 'some data' },
    );
  }
}

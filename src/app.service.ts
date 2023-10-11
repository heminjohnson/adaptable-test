import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return { message: 'Health OK', version: '0.1.0' };
  }
}

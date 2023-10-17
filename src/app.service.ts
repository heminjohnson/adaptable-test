import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return {
      app: 'TrendRadar Backend',
      message: 'Health OK',
      version: '0.1.0',
    };
  }
}

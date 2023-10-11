import { Injectable } from '@nestjs/common';
import { Radar } from './entities/radar.entity';
import { radar } from '../../../database/mocks/radar';

@Injectable()
export class RadarService {
  private radar: Radar = radar;

  findAll() {
    return this.radar;
  }
}

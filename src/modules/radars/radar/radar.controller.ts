import { Controller, Get } from '@nestjs/common';
import { radar } from '../../../database/mocks/radar';
import { ItemsService } from '../items/items.service';
import { RadarService } from './radar.service';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('radar')
@Controller('radar')
export class RadarController {
  constructor(private readonly radarService: RadarService) {}
  @Get()
  findAll() {
    return this.radarService.findAll();
  }
}

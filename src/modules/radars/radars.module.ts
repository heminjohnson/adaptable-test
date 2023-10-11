import { Module } from '@nestjs/common';
import { CategoriesController } from './categories/categories.controller';
import { RadarController } from './radar/radar.controller';
import { ItemsController } from './items/items.controller';
import { CategoriesService } from './categories/categories.service';
import { ItemsService } from './items/items.service';
import { RadarService } from './radar/radar.service';
import { VotesController } from "./votes/votes.controller";

@Module({
  controllers: [CategoriesController, RadarController, ItemsController, VotesController],
  providers: [CategoriesService, ItemsService, RadarService],
})
export class RadarsModule {}

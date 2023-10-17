import { Module } from '@nestjs/common';
import { CategoriesController } from './categories/categories.controller';
import { RadarController } from './radar/radar.controller';
import { ItemsController } from './items/items.controller';
import { CategoriesService } from './categories/categories.service';
import { ItemsService } from './items/items.service';
import { RadarService } from './radar/radar.service';
import { VotesController } from './votes/votes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Category,
  CategorySchema,
} from './categories/entities/category.entity';
import { Item, ItemSchema } from './items/entities/item.entity';
import { Vote, VoteSchema } from './votes/entities/vote.entity';
import { VotesService } from './votes/votes.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
      { name: Item.name, schema: ItemSchema },
      { name: Vote.name, schema: VoteSchema },
    ]),
  ],
  controllers: [
    CategoriesController,
    RadarController,
    ItemsController,
    VotesController,
  ],
  providers: [CategoriesService, ItemsService, RadarService, VotesService],
})
export class RadarsModule {}

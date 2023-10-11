import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './entities/item.entity';
import { items } from '../../../database/mocks/items';
import { CreateItemDto } from "./dto/create-item.dto";
import { UpdateItemDto } from "./dto/update-item.dto";

@Injectable()
export class ItemsService {
  private items: Item[] = items;

  findAll() {
    return this.items;
  }

  findOne(id: string) {
    const item = this.items.find((item) => item.id === +id);
    if (!item) {
      throw new NotFoundException(`Item #${id} not found`);
    }
    return item;
  }

  create(createItemDto: CreateItemDto) {
    this.items.push(createItemDto);
  }

  update(id: string, updateItemDto: UpdateItemDto) {
    const existingItem = this.findOne(id);
    if (existingItem) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const itemIndex = this.items.findIndex((item) => item.id === +id);
    if (itemIndex >= 0) {
      this.items.splice(itemIndex, 1);
    }
  }
}

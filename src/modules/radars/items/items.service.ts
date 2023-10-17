import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name) private readonly itemModel: Model<Item>,
  ) {}

  findAll() {
    return this.itemModel.find().populate('category').exec();
  }

  async findOne(id: string) {
    const item = await this.itemModel.findOne({ _id: id }).populate('category').exec();
    if (!item) {
      throw new NotFoundException(`Item #${id} not found`);
    }
    return item;
  }

  create(createItemDto: CreateItemDto) {
    const item = new this.itemModel(createItemDto);
    return item.save();
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    const existingItem = await this.itemModel
      .findOneAndUpdate({ _id: id }, { $set: updateItemDto }, { new: true })
      .exec();

    if (!existingItem) {
      throw new NotFoundException(`Item #${id} not found`);
    }
  }

  async remove(id: string) {
    return this.itemModel.deleteOne({ _id: id });
  }
}

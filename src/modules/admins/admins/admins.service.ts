import { Injectable, NotFoundException } from '@nestjs/common';
import { Admin } from './entities/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AdminsService {
  constructor(
    @InjectModel(Admin.name) private readonly adminModel: Model<Admin>,
  ) {}

  findAll() {
    return this.adminModel.find().exec();
  }

  async findOne(id: string) {
    const admin = await this.adminModel.findOne({ _id: id }).exec();
    if (!admin) {
      throw new NotFoundException(`Admin #${id} not found`);
    }
    return admin;
  }

  create(createAdminDto: CreateAdminDto) {
    const admin = new this.adminModel(createAdminDto);
    return admin.save();
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    const existingAdmin = await this.adminModel
      .findOneAndUpdate({ _id: id }, { $set: updateAdminDto }, { new: true })
      .exec();

    if (!existingAdmin) {
      throw new NotFoundException(`Admin #${id} not found`);
    }
  }

  async remove(id: string) {
    return this.adminModel.deleteOne({ _id: id });
  }
}

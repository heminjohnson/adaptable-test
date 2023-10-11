import { Module } from '@nestjs/common';
import { AdminsController } from './admins/admins.controller';
import { AdminsService } from './admins/admins.service';
import { Admin, AdminSchema } from './admins/entities/admin.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }]),
  ],
  controllers: [AdminsController],
  providers: [AdminsService],
})
export class AdminsModule {}

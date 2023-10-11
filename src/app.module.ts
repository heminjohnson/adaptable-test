import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { TodoitemsModule } from './todoitems/todoitems.module';

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost:27017/test';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(databaseUrl),
    TodoitemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RadarsModule } from './modules/radars/radars.module';
import { AdminsModule } from './modules/admins/admins.module';
import { MongooseModule } from '@nestjs/mongoose';

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost:27017/trendradar';

@Module({
  imports: [
    RadarsModule,
    AdminsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(databaseUrl),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

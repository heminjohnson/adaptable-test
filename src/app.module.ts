import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RadarsModule } from './modules/radars/radars.module';
import { AdminsModule } from './modules/admins/admins.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    RadarsModule,
    AdminsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

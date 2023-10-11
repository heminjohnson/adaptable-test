import { Controller, Get } from '@nestjs/common';
import { Vote } from './entities/vote.entity';
import { votes } from '../../../database/mocks/votes';

@Controller('voting')
export class VotesController {
  private votes: Vote[] = votes;
  @Get()
  findAll() {
    return this.votes;
  }
}

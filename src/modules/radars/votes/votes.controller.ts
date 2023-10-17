import { Controller, Get } from '@nestjs/common';
import { votes } from '../../../database/mocks/votes';

@Controller('voting')
export class VotesController {
  private votes: any = votes;
  @Get()
  findAll() {
    return this.votes;
  }
}

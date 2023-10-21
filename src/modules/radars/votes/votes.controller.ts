import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { VotesService } from './votes.service';
import { CreateVoteDto } from "./dto/create-vote.dto";
import { UpdateVoteDto } from "./dto/update-vote.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('votes')
@Controller('votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}
  @Get()
  findAll() {
    return this.votesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.votesService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateVoteDto) {
    return this.votesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateVoteDto) {
    return this.votesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.votesService.remove(id);
  }
}

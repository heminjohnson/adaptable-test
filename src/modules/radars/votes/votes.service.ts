import { Injectable, NotFoundException } from '@nestjs/common';
import { Vote } from './entities/vote.entity';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class VotesService {
  constructor(
    @InjectModel(Vote.name) private readonly voteModel: Model<Vote>,
  ) {}

  findAll() {
    return this.voteModel.find().populate('item').exec();
  }

  async findOne(id: string) {
    const vote = await this.voteModel.findOne({ _id: id }).populate('category').exec();
    if (!vote) {
      throw new NotFoundException(`Vote #${id} not found`);
    }
    return vote;
  }

  create(createVoteDto: CreateVoteDto) {
    const vote = new this.voteModel(createVoteDto);
    return vote.save();
  }

  async update(id: string, updateVoteDto: UpdateVoteDto) {
    const existingVote = await this.voteModel
      .findOneAndUpdate({ _id: id }, { $set: updateVoteDto }, { new: true })
      .exec();

    if (!existingVote) {
      throw new NotFoundException(`Vote #${id} not found`);
    }
  }

  async remove(id: string) {
    return this.voteModel.deleteOne({ _id: id });
  }
}

import { Injectable } from '@nestjs/common';
import { Radar } from './entities/radar.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Vote } from '../votes/entities/vote.entity';
import { Model } from 'mongoose';

@Injectable()
export class RadarService {
  constructor(
    @InjectModel(Vote.name) private readonly voteModel: Model<Vote>,
  ) {}
  async findAll(): Promise<Radar> {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // Month is zero-based (0-11)

    // Calculate the current quarter and year
    const currentQuarter = Math.floor(currentMonth / 3) + 1; // Quarters are 1-based (1-4)
    const currentYear = currentDate.getFullYear();

    const votes = await this.voteModel
      .find()
      .populate({
        path: 'item',
        select: '-__v',
        populate: {
          path: 'category',
          select: '-__v',
        },
      })
      .exec();

    const trends = votes.map((vote) => {
      return {
        change: 'neutral',
        value: vote.value,
        item: vote.item,
        timestamp: vote.updatedAt,
      };
    });

    return {
      name: `Radar Q${currentQuarter}/${currentYear}`,
      trends,
    };
  }
}

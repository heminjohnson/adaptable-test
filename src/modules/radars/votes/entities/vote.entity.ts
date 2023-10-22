import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Item } from '../../items/entities/item.entity';

@Schema({ timestamps: true })
export class Vote extends Document {
  @Prop()
  value: string;

  @Prop()
  employeeId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Item' })
  item: Item;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);

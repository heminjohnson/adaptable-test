import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
@Schema()
export class Admin extends Document {
  @Prop()
  fullName: string;

  @Prop()
  employeeId: string;

  @Prop()
  email: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);

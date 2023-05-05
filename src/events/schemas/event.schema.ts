import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Event extends Document {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: false })
  procedure: string;

  @Prop({ type: Number, required: true })
  price: number;
}

export const EventSchema = SchemaFactory.createForClass(Event);

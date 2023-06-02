import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from '../interfaces/auth.interface';

@Schema()
export class User extends Document {
  @Prop({ type: String, required: true })
  firstname: string;

  @Prop({ type: String, required: true })
  lastname: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, required: true, default: 'user' })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);

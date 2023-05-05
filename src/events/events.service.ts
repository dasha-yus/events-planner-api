import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from './schemas/event.schema';
import { EventDTO } from './dto/event.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel('Event') private readonly eventModel: Model<Event>,
  ) {}

  async findAll(): Promise<Event[]> {
    return this.eventModel.find().exec();
  }

  async findById(id: string): Promise<Event> {
    return await this.eventModel.findOne({ _id: id });
  }

  async create(event: EventDTO) {
    const newEvent = new this.eventModel(event);
    return newEvent.save();
  }

  async delete(id: string): Promise<Event> {
    return this.eventModel.findByIdAndRemove(id);
  }

  async update(id: string, event: EventDTO): Promise<Event> {
    return await this.eventModel.findByIdAndUpdate(id, event, { new: true });
  }
}

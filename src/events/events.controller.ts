import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EventDTO } from './dto/event.dto';
import { EventsService } from './events.service';
import { Event } from './interfaces/event.interface';

@Controller('events')
export class EventsController {
  constructor(
    private readonly eventsService: EventsService,
    private readonly logger: Logger,
  ) {}

  @Get()
  findAll(): Promise<Event[]> {
    this.logger.warn('Getting all events');
    return this.eventsService.findAll();
  }

  @Get(':id')
  findById(@Param() param): Promise<Event> {
    return this.eventsService.findById(param.id);
  }

  @Post()
  create(@Body() eventDTO: EventDTO): Promise<Event> {
    return this.eventsService.create(eventDTO);
  }

  @Put(':id')
  async update(@Param() param, @Body() eventDTO: EventDTO): Promise<Event> {
    return this.eventsService.update(param.id, eventDTO);
  }

  @Delete(':id')
  async delete(@Param() param): Promise<Event> {
    return this.eventsService.delete(param.id);
  }
}

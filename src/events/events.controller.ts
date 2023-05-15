import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { EventDTO } from './dto/event.dto';
import { EventsService } from './events.service';
import { Event } from './interfaces/event.interface';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Controller('events')
export class EventsController {
  constructor(
    private readonly eventsService: EventsService,
    private readonly logger: Logger,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Event[]> {
    this.logger.debug('Getting all events');
    return this.eventsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findById(@Param() param): Promise<Event> {
    return this.eventsService.findById(param.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() eventDTO: EventDTO): Promise<Event> {
    return this.eventsService.create(eventDTO);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param() param, @Body() eventDTO: EventDTO): Promise<Event> {
    return this.eventsService.update(param.id, eventDTO);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param() param): Promise<Event> {
    return this.eventsService.delete(param.id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObservationsService } from './observations.service';
import { CreateObservationDto } from './dto/create-observation.dto';
import { UpdateObservationDto } from './dto/update-observation.dto';
import { createBaseController } from 'src/common/common.controller';
import { Observation } from './entities/observation.entity';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';
import { Auth } from 'src/auth/decorators';

const baseController = createBaseController<Observation>(
  ['employee'],
  '',
  ValidRoles.ADMIN,
  ValidRoles.USER,
);

@Controller('observations')
export class ObservationsController extends baseController {
  constructor(
    private readonly observationsService: ObservationsService,
    @InjectRepository(Observation)
    readonly observationRepository: Repository<Observation>,
  ) {
    super(observationRepository);
  }

  @Auth(ValidRoles.ADMIN)
  @Post()
  create(@Body() createObservationDto: CreateObservationDto) {
    return this.observationsService.create(createObservationDto);
  }

  @Auth()
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.observationsService.findOne(id);
  }

  @Auth(ValidRoles.ADMIN)
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateObservationDto: UpdateObservationDto,
  ) {
    return this.observationsService.update(id, updateObservationDto);
  }

  @Auth(ValidRoles.ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.observationsService.remove(id);
  }
}

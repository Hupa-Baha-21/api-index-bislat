import { Controller } from '@nestjs/common';
import { DecisionsService } from './decisions.service';

@Controller('api/v1/decisions')
export class DecisionsController {
  constructor(private readonly service: DecisionsService) {}
}

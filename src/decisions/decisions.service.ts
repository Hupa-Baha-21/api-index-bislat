import { Injectable } from '@nestjs/common';
import { Decision } from './Decision.model';

@Injectable()
export class DecisionsService {
  private decisions = new Map<string, Decision>();

  
}

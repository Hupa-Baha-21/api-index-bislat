import { Body, Controller, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('api/v1/courses')
export class CoursesController {
    constructor(private readonly service: CoursesService) {}

    @Post()
    addCourse(
        @Body() all,
        @Body('number') number: number, 
        @Body('name') name: string, 
        @Body('description') description: string, 
    ): boolean {
        console.log(number);
        console.log(all);
        return this.service.addCourse(number, name, description);
    }
}

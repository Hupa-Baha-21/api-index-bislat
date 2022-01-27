import { Body, Controller, Get, Post } from '@nestjs/common';
import { Course } from './course.model';
import { CoursesService } from './courses.service';

@Controller('api/v1/courses')
export class CoursesController {
    constructor(private readonly service: CoursesService) {}

    @Post()
    addCourse(
        @Body('number') number: number, 
        @Body('name') name: string, 
        @Body('description') description: string, 
    ): boolean {
        return this.service.addCourse(number, name, description);
    }

    @Post('/opening')
    setOpeningCourses(@Body('courses') courses: Course[]): void {
        this.service.setOpeningCourses(courses);
    }

    @Get()
    getCourses(): Course[] {
        return this.service.getAllCourses();
    }

    @Get('/opening')
    getOpeningCourses(): Course[] {
        return this.service.getOpeningCourses();
    }
}

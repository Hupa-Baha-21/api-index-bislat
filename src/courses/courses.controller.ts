import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Course } from './course.model';
import { CoursesService } from './courses.service';

@Controller('api/v1/courses')
export class CoursesController {
    constructor(private readonly service: CoursesService) {}

    @Post()
    @UseGuards(AuthGuard('api-key'))
    addCourse(
        @Body('number') number: number, 
        @Body('name') name: string, 
        @Body('description') description: string, 
    ): boolean {
        return this.service.addCourse(number, name, description);
    }

    @Post('/opening')
    @UseGuards(AuthGuard('api-key'))
    setOpeningCourses(@Body('courses') courses: Course[]): void {
        this.service.setOpeningCourses(courses);
    }

    @Get()
    @UseGuards(AuthGuard('api-key'))
    getCourses(): Course[] {
        return this.service.getAllCourses();
    }

    @Get('/opening')
    @UseGuards(AuthGuard('api-key'))
    getOpeningCourses(): Course[] {
        return this.service.getOpeningCourses();
    }
}

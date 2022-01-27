import { Injectable } from '@nestjs/common';
import { Course } from './course.model';

@Injectable()
export class CoursesService {
    private courses = new Map<number, Course>();

    addCourse(number: number, name: string, description: string): boolean {
        if (this.courses.has(number))
            return false;

        this.courses.set(number, {number, name, description, opening: false});

        return true;
    }

    setOpeningCourses(courses: Course[]): void {
        console.log('here is the map' + Array.from(this.courses.values()));
        this.courses.forEach(course => course.opening = false);
        console.log(courses);

        courses.forEach(course => this.courses.has(course.number) && (this.courses[course.number] = {...courses[course.number], opening: true}));
    }

    getAllCourses(): Course[] {
        return Array.from(this.courses.values());
    }

    getOpeningCourses(): Course[] {
        return this.getAllCourses().filter(course => course.opening);
    }
}

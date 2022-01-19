import { Injectable } from '@nestjs/common';
import { Course } from './course.model';

@Injectable()
export class CoursesService {
    private courses: Course[] = [];

    addCourse(number: number, name: string, description: string): boolean {
        if (this.courses.some(course => course.number === number)) {
            console.log("Hi it already exists " + number);
            return false;
        }

        this.courses.push({number, name, description});

        return true;
    }

    getCourses() {
        return this.courses;
    }
}

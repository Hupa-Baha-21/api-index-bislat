import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [CoursesModule, AuthModule],
})
export class AppModule {}

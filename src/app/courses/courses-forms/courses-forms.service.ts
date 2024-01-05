import { Injectable, EventEmitter } from '@angular/core';
import { Course } from '../course';
import { COURSES } from '../courses-list/mock-courses';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesFormsService {

  c: Course;

  constructor(private msg: MessageService) { }

  addCourse(course) {
    COURSES.push(course);
    this.msg.setMessage('Courses added.');
  }
}

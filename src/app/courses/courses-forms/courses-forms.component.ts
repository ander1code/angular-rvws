import { Component } from '@angular/core';
import { Course } from '../course';
import { CoursesFormsService } from './courses-forms.service';

@Component({
  selector: 'app-courses-forms',
  templateUrl: './courses-forms.component.html',
  styleUrls: ['./courses-forms.component.css']
})
export class CoursesFormsComponent {

  c: Course;

  constructor(private coursesFormsService: CoursesFormsService) { }

  addCourse(data) {
    this.c = new Course();
    this.c.name = data;
    this.coursesFormsService.addCourse(this.c);
  }
}

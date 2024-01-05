import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CoursesListService } from './courses-list.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: Course[] = [];

  constructor(private coursesListService: CoursesListService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courses = this.coursesListService.getCourses();
  }
}

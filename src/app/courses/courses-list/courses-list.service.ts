import { Injectable, OnInit } from '@angular/core';
import { COURSES } from './mock-courses';
import { CoursesFormsService } from '../courses-forms/courses-forms.service';
import { MessageService } from '../message.service';

@Injectable({
    providedIn: 'root'
})
export class CoursesListService implements OnInit {

    constructor(private coursesFormsServices: CoursesFormsService, private msg: MessageService) { }

    ngOnInit() {
        this.getCourses();
    }

    getCourses() {
        this.msg.setMessage('Fetch courses.');
        return COURSES;
    }
}

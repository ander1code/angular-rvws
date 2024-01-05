import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Scheduler } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  aba = 'link1';
  text = 'hello, world!';
  price = 4212.11;
  valnum = 4.57465;
  today = new Date();
  courses = ['Angular', 'Java', 'C#', 'Python', 'Ruby'];
  person: any = {
    id: 1,
    name: 'Anderson',
    birthday: new Date(1981, 11, 12),
    address: {
      street: 'Amphitheatre Parkway',
      district: 'Mountain View',
      num: 1600,
      city: 'Santa Clara',
      state: 'California'
    }
  };

  _filter: string;

  valAsync1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Asynchronous values 01'), 3000);
  });

  constructor() { }

  ngOnInit() {
  }

  addCourse(course) {
    this.courses.push(course);
  }
}

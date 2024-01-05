import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  styles: [`.message{
    margin-left:20px;
    font-weight:bold;
    color:red;
    font-size:20px;
  }`],
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {

  msg = '';

  constructor(private message: MessageService) { }

  ngOnInit(): void {
    this.message.sentMessage.subscribe((response) => {
      this.msg = response.message;
    });
  }
}

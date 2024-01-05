import { Component, OnInit } from '@angular/core';
import { PeopleHttpService } from './peoplehttp.service';
import { Person } from './person';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http-cmp',
  templateUrl: './http-cmp.component.html',
  styleUrls: ['./http-cmp.component.css']
})
export class HttpCmpComponent implements OnInit {

  // people: Person[];

  people$: Observable<Person[]>;

  constructor(private peopleHttpService: PeopleHttpService) { }

  ngOnInit() {
    // this.peopleHttpService.getPeople().subscribe(response => this.people = response);
    this.people$ = this.peopleHttpService.getPeople();
  }
}

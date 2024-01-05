import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';
import { Observable } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PeopleHttpService {

    private readonly API: string = `${environment.API}`;

    constructor(private http: HttpClient) {
    }

    getPeople(): Observable<Person[]> {
        return this.http.get<Person[]>(this.API).pipe(tap(console.log), delay(3000));
    }
}

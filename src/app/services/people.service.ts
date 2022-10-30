import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { people } from '../model/people.model';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  // URL = 'http://localhost:8080/people/';
  URL = 'https://fontana.herokuapp.com/people/';

  constructor(private http: HttpClient) { }

  public getPeople(): Observable<people> {
    return this.http.get<people>(this.URL + 'get/profile');
  }
}

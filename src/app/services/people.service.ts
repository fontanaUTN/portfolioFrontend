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

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<people[]> {
    return this.httpClient.get<people[]>(this.URL + 'lista');
  }

  public details(id: number): Observable<people> {
    return this.httpClient.get<people>(this.URL + `detail/${id}`);
  }

  /* public save(experience: Experience): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'create', experience);
  } */

  public update(id: number, experience: people): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, experience);  
  }

  /* public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  } */
}

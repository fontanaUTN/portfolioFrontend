import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { people } from '../model/people.model';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  URL = environment.URL + 'people/';

  constructor(private httpClient: HttpClient) { }

  public getPeople(): Observable<people> {
    return this.httpClient.get<people>(this.URL + 'get/profile');
  }

  public lista(): Observable<people[]> {
    return this.httpClient.get<people[]>(this.URL + 'list');
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Knowledge } from '../model/knowledge';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService {
  expURL = environment.URL + 'services/';

  constructor(private httpClient : HttpClient) { }

  public list(): Observable<Knowledge[]>{
    return this.httpClient.get<Knowledge[]>(this.expURL + 'list');
  }

  public details(id: number): Observable<Knowledge>{
    return this.httpClient.get<Knowledge>(this.expURL + `detail/${id}`);
  }

  public save(knowledge : Knowledge): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'create', knowledge);
  }

  public update(id: number, knowledge: Knowledge): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `update/${id}`, knowledge);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}

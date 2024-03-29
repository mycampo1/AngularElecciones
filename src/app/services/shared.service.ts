import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private url = environment.urlServerAPI //localhost:5001/authentication/login  { username, password }

  constructor(
    public http: HttpClient
  ) { }

  post = (endPoint: string, body: any): Observable<any> => this.http.post<any>(`${this.url}/${endPoint}`, body);
  get = (endPoint: string): Observable<any> => this.http.get<any>(`${this.url}/${endPoint}`);
  put = (endPoint: string, body: any): Observable<any> => this.http.put(`${this.url}/${endPoint}`, body);
  delete = (endPoint: string, id: string): Observable<any> => this.http.delete(`${this.url}/${endPoint}/${id}`);

  getItemFromLocalStorage(item: string) {
    return localStorage.getItem(item);
  }

  setItemInLocalStorage(item: string, value: any) {
    localStorage.setItem(item, value);
  }

}

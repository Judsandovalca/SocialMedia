import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post('/api/login', data);
  }

  setToken(token: string) {
    document.cookie = `token=${token};path=/`;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient ) { }

  login(data: any): Observable<any> {
    return this.http.post('http://localhost:4000/api/auth/login', data);
  }
  register(data: any): Observable<any> {
    return this.http.post('http://localhost:4000/api/auth/register', data);
  }

  setToken(token: string) {
    document.cookie = `token=${token};path=/`;
  }

}

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = document.cookie.split(';').find(c => c.startsWith('token='));
    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token.split('=')[1])
      });
    }
    return next.handle(req);
  }

}

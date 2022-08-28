// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { LoginService } from '../services/login.service';

// @Injectable()

// export class addHeaderInterceptor implements HttpInterceptor {

//     constructor(private loginService: LoginService){}

//     intercept(
//         req: HttpRequest<any>,
//         next: HttpHandler): Observable<HttpEvent<any>> {
//         const email = this.loginService.currentUser.email;
//         const addHeader = req.clone({
//             headers: req.headers.set('uniqueKey', email)
//         })
        
//         return next.handle(addHeader);
//     }
// }
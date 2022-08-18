import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()

export class addDataInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginService){}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        const birth = this.loginService.currentUser.birth;
        const addData = req.clone({
            headers: req.body.push({birthday: birth})
        })
        
        return next.handle(addData);
    }
}
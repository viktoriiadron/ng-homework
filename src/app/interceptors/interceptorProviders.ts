import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { addDataInterceptor } from './addDataInterceptor';
// import { addHeaderInterceptor } from './addHeaderInterceptor';
import { logInterceptor } from './logInterceptor';
 
export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        // useClass: addHeaderInterceptor, addDataInterceptor, logInterceptor,
        multi: true
    },
];
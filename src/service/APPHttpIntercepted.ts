import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
export class APPHttpIntercepted implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    console.log(req);

    return next.handle(req);
  }
}

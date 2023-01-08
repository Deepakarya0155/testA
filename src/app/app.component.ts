import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TestA';

  constructor(private http: HttpClient) {}

  sendGet = () => {
    console.log('a');
    const res1 = this.http
      .get('https://3.89.254.248:8080/ns/api/appDetails/152')
      .subscribe((res) => {
        console.log(res);
      });
    console.log(res1);
  };

  sendPost = () => {
    console.log('post');
    const res1 = this.http
      .post('https://3.89.254.248:8080/ns/login', {
        email: 'DeepakArya0155@gmail.com',
        password: 'Arya$786',
      })
      .subscribe((res) => {
        console.log(res);
      });
    console.log(res1);
  };
}

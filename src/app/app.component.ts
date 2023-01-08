import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TestA';
  email = '';
  constructor(private http: HttpClient) {}

  sendGet = () => {
    console.log('a');
    const res1 = this.http
      .get('https://3.89.254.248:8080/ns/api/appDetails/152')
      .subscribe(
        (res: any) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    console.log(res1);
  };

  sendPost = async () => {
    console.log('post');
    const res1 = await this.http
      .post('https://3.89.254.248:8080/ns/login', {
        email: 'DeepakArya0155@gmail.com',
        password: 'Arya$786',
      })
      // .subscribe(
      //   (res: any) => {
      //     console.log(res.user.email);
      //     this.email = res.user.email;
      //   },
      //   (err) => {
      //     console.log(err);
      //   }
      // );
      .toPromise();
    console.log(res1);
  };
}

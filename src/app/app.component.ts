import { HttpClient, HttpHeaders } from '@angular/common/http';
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
      .get(
        'https://ec2-18-205-185-140.compute-1.amazonaws.com:8080/ns/api/appDetails/152'
      )
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

  sendPost = () => {
    console.log('post');

    const head = new HttpHeaders({
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.70 Safari/537.36',
    });

    this.http
      .post(
        'https://ec2-3-87-15-161.compute-1.amazonaws.com:8443/ns/login',
        {
          email: 'DeepakArya0155@gmail.com',
          password: 'Arya$786',
        },
        {
          headers: head,
        }
      )
      .subscribe(
        (res: any) => {
          console.log(res.user.email);
          this.email = res.user.email;
        },
        (err) => {
          console.log(err);
        }
      );
  };
}

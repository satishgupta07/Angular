import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  data = [
     {
       name: 'Satish',
       age:23,
       email: 'satish@gmail.com'
     },
     {
       name: 'Aryan',
       age:25,
       email: 'aryan@gmail.com'
     },
     {
       name: 'Peter',
       age: 30,
       email: 'peter@gmail.com'
     },
     {
       name: 'John',
       age: 31,
       email: 'john@gmail.com'
     }
  ]
}

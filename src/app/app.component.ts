import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  name = 'Satish Kumar Gupta';
  getCity(){
    return "Lucknow"
  };
  obj = {
    name: 'Peter',
    age: 20
  };
  arr = ['bruce','peter','john'];
  siteUrl=window.location.href
}

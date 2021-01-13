import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  currentVal = "";
  getVal(val: any) {
    console.log(val);
    this.currentVal = val;
  }
}

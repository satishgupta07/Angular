import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'ngr-components-demo',
  templateUrl: './components-demo.component.html',
  styleUrls: ['./components-demo.component.css']
})
export class ComponentsDemoComponent implements OnInit {
  
  users: User[] = [
    {
      name: 'Arun Gupta',
      handle: '@arungupta',
      description: 'Description for Arun',
    },
    {
      name: 'Varun Sharma',
      handle: '@vsharma',
      description: 'Description for Varun',
    },
    {
      name: 'Anuj Kumar',
      handle: '@akumar',
      description: 'Description for Anuj',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

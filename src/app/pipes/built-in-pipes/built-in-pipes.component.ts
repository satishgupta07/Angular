import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {

  course = {
    title: 'Angular fundamentals',
    rating: 4.9,
    students: 60120,
    price: 200,
    releaseDate: new Date(2021, 0, 13),
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}

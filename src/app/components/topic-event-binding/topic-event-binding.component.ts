import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-topic-event-binding',
  templateUrl: './topic-event-binding.component.html',
  styleUrls: ['./topic-event-binding.component.css']
})
export class TopicEventBindingComponent implements OnInit {
  name = 'Anup';
  message = '';

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(event: FocusEvent) {
    // type assertion
    this.name = (event.target as HTMLInputElement).value;
  }

  onInput(event: KeyboardEvent) {
    this.name = (event.target as HTMLInputElement).value;
  }

  resetName() {
    this.name = '';
  }

  showMessageFromInput(input: HTMLInputElement) {
    this.message = input.value;
  }
  
}

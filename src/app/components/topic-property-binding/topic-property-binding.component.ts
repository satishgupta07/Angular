import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-topic-property-binding',
  templateUrl: './topic-property-binding.component.html',
  styleUrls: ['./topic-property-binding.component.css']
})
export class TopicPropertyBindingComponent implements OnInit {
  text = 'Some random text';
  htmlSnippet = '<strong>Some bolded text</strong>';
  inputValue = 'Enter age';
  shouldHideText = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleText() {
    this.shouldHideText = !this.shouldHideText;
  }

}

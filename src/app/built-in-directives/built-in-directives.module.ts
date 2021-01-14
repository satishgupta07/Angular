import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiltInDirectivesDemoComponent } from './built-in-directives-demo/built-in-directives-demo.component';
import { UserCardComponent } from './user-card/user-card.component';
import { TopicNgForComponent } from './topic-ng-for/topic-ng-for.component';



@NgModule({
  declarations: [BuiltInDirectivesDemoComponent, UserCardComponent, TopicNgForComponent],
  imports: [
    CommonModule
  ],
  exports: [BuiltInDirectivesDemoComponent]
})
export class BuiltInDirectivesModule { }

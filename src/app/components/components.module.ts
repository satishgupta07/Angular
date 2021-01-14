import { NgModule } from "@angular/core";
import { ComponentsDemoComponent } from "./components-demo/components-demo.component";
import { UserCardComponent } from './user-card/user-card.component';
import { TopicPropertyBindingComponent } from './topic-property-binding/topic-property-binding.component';
import { TopicEventBindingComponent } from './topic-event-binding/topic-event-binding.component';

@NgModule({
    declarations: [
      ComponentsDemoComponent,
      UserCardComponent,
      TopicPropertyBindingComponent,
      TopicEventBindingComponent
    ],
    exports: [ComponentsDemoComponent],
  })
  export class ComponentsModule {}
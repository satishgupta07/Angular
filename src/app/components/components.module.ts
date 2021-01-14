import { NgModule } from "@angular/core";
import { ComponentsDemoComponent } from "./components-demo/components-demo.component";
import { UserCardComponent } from './user-card/user-card.component';
import { TopicPropertyBindingComponent } from './topic-property-binding/topic-property-binding.component';

@NgModule({
    declarations: [
      ComponentsDemoComponent,
      UserCardComponent,
      TopicPropertyBindingComponent
    ],
    exports: [ComponentsDemoComponent],
  })
  export class ComponentsModule {}
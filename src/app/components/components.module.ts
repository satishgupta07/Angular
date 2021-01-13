import { NgModule } from "@angular/core";
import { ComponentsDemoComponent } from "./components-demo/components-demo.component";
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
    declarations: [
      ComponentsDemoComponent,
      UserCardComponent
    ],
    exports: [ComponentsDemoComponent],
  })
  export class ComponentsModule {}
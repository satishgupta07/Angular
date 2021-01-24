import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { UiToolbarComponent } from './ui-toolbar/ui-toolbar.component';
import { BuiltInDirectivesModule } from './built-in-directives/built-in-directives.module';
import { PipesModule } from './pipes/pipes.module';
import { CustomDirectivesModule } from './custom-directives/custom-directives.module';
import { FormsDemoModule } from './forms-demo/forms-demo.module';

@NgModule({
  declarations: [
    AppComponent,
    UiToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BuiltInDirectivesModule,
    PipesModule,
    CustomDirectivesModule,
    FormsDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
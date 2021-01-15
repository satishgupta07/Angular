import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';



@NgModule({
  declarations: [PipesDemoComponent, BuiltInPipesComponent],
  imports: [
    CommonModule
  ],
  exports: [PipesDemoComponent]
})
export class PipesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { EllipsisPipe } from './ellipsis.pipe';



@NgModule({
  declarations: [PipesDemoComponent, BuiltInPipesComponent, CustomPipesComponent, EllipsisPipe],
  imports: [
    CommonModule
  ],
  exports: [PipesDemoComponent]
})
export class PipesModule { }

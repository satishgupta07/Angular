import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ], 
  exports : [FormsComponent]
})
export class FormsDemoModule { }

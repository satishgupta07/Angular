import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsDemoComponent } from './components/components-demo/components-demo.component';
import { CustomDirectivesDemoComponent } from './custom-directives/custom-directives-demo/custom-directives-demo.component';
import { PipesDemoComponent } from './pipes/pipes-demo/pipes-demo.component';

const routes: Routes = [
  {
    path: 'components',
    component: ComponentsDemoComponent,
  },
  // {
  //   path: 'built-in-directives',
  //   component: BuiltInDirectivesDemoComponent,
  // },
  {
    path: 'built-in-directives',
    loadChildren: () =>
      import('./built-in-directives/built-in-directives.module').then(
        (m) => m.BuiltInDirectivesModule
      ),
  },
  {
    path: 'pipes',
    component: PipesDemoComponent,
  },
  {
    path: 'custom-directives',
    component: CustomDirectivesDemoComponent,
  },
  {
    path: '**', // catch all
    redirectTo: '/components',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

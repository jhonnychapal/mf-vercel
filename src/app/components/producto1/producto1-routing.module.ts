import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Producto1Component } from './producto1.component';

const routes: Routes = [
  {
    path: '',
    component: Producto1Component
  },
  // {
  //   path: 'otra-pantalla',
  //   component: OtraPantallaComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Producto1RoutingModule { }

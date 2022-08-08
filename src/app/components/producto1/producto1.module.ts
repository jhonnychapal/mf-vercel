import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Producto1RoutingModule } from './producto1-routing.module';
import { Producto1Component } from './producto1.component';


@NgModule({
  declarations: [
    Producto1Component
  ],
  imports: [
    CommonModule,
    Producto1RoutingModule
  ]
})
export class Producto1Module { }

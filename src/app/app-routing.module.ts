import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'producto1',
    pathMatch: 'full'
  },
  {
    path: 'producto1',
    loadChildren: ()=> import('./components/producto1/producto1.module').then((m) => m.Producto1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

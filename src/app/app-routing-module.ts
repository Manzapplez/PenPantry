import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { About } from './about/about';
import { Store } from './store/store';

const routes: Routes = [
  { path: '', redirectTo: 'store', pathMatch: 'full'},
  { path: 'store', component: Store },
  { path: 'about', component: About }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
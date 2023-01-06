import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  
  {path: '', component:NewComponent},
  {path: 'second/:id', component:SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

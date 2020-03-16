import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TafelComponent } from '../tafel/tafel.component';
import { MuurtafelComponent } from '../muurtafel/muurtafel.component';

const routes: Routes = [
  { path: 'tafel', component: TafelComponent },
  { path: 'muurtafel', component: MuurtafelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
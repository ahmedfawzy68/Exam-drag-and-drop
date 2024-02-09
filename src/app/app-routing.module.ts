import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './subject/tabs/tabs.component';

const routes: Routes = [
  { path: 'subjects', component: TabsComponent },
  { path: '', redirectTo: 'subjects', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

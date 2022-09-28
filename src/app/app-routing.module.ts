import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { BasicHomeComponent } from './basic-home/basic-home.component';
import { BasicSectionComponent } from './basic-section/basic-section.component';

const routes: Routes = [
  { path: '', component: BasicHomeComponent },
  { path: 'home', component: BasicHomeComponent },
  { path: 'card', component: BasicCardComponent },
  { path: 'card/:basic-name', component: BasicCardComponent },
  { path: "**", component: BasicSectionComponent } // Wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

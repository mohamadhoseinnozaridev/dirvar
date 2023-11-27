import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { MainPageComponent } from './page/main/main-page.component';
import { NewComponent } from './page/main/new/new.component';
import { OriginalComponent } from './page/main/original/original.component';
import { Select_cit_orginaComponent } from './components/select_cit_orgina/select_cit_orgina.component';
import { SuportComponent } from './components/suport/suport.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'new', component: NewComponent },
  { path: 'city', component: Select_cit_orginaComponent },
  { path: 'orginal', component: OriginalComponent },
  { path: 'suport', component: SuportComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

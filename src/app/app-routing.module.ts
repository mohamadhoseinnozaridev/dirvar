import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './page/main/main_page/main-page.component';
import { NewComponent } from './page/main/new/new.component';
import { OriginalComponent } from './page/main/original/original.component';
import { Select_cit_orginaComponent } from './components/select_cit_orgina/select_cit_orgina.component';
import { SuportComponent } from './components/suport/suport.component';
import { Product_detailsComponent } from './page/main/Product_details/Product_details.component';
import { FinalNoteComponent } from './components/finalNote/finalNote.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'new', component: NewComponent },
  { path: 'orginal', component: OriginalComponent },
  { path: 'suport', component: SuportComponent },
  { path: 'product', component: Product_detailsComponent },
  { path: 'ّfinal', component: FinalNoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

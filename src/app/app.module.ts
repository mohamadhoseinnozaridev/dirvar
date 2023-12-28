import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { MainPageComponent } from './page/main/main_page/main-page.component';
import { OriginalComponent } from './page/main/original/original.component';
import { Navbar_orginalComponent } from './components/navbar_orginal/navbar_orginal.component';
import { Select_cit_orginaComponent } from './components/select_cit_orgina/select_cit_orgina.component';
import { Side_orginal_rightComponent } from './components/side_orginal_right/side_orginal_right.component';
import { Side_orginal_leftComponent } from './components/side_orginal_left/side_orginal_left.component';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { Product_detailsComponent } from './page/main/Product_details/Product_details.component';
import { SuportComponent } from './components/suport/suport.component';
import { Search_main_pagePipe } from './Pipe/search_main_page.pipe';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PhonenumberFormComponent } from './components/register/phonenumber-form/phonenumber-form.component';
import { Verification_codeComponent } from './components/register/Verification_code/Verification_code.component';
import { NoticeFormComponent } from './components/register/notice-form/notice-form.component';
import { ListNotePipe } from './Pipe/list-note.pipe';
import { FinalNoteComponent } from './components/finalNote/finalNote.component';
import { DecimalPipe } from '@angular/common';
import { New_cityComponent } from './models/new_city/new_city.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    MainPageComponent,
    OriginalComponent,
    Navbar_orginalComponent,
    Select_cit_orginaComponent,
    Side_orginal_rightComponent,
    Side_orginal_leftComponent,
    Product_detailsComponent,
    SuportComponent,
    RegisterComponent,
    PhonenumberFormComponent,
    Verification_codeComponent,
    NoticeFormComponent,
    FinalNoteComponent,
    New_cityComponent,
    // Pipe//////////////////////////////
    Search_main_pagePipe,
    ListNotePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService, CategoryService, DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

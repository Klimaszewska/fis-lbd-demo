import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpenseComponent } from './expense/expense.component';
import {FormsModule} from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ExpenseService} from './services/expense.service';
import {CategoryService} from './services/category.service';
import { CategoryDetailComponent } from './category-detail/category-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent,
    CategoryComponent,
    CategoryDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'expenses', component: ExpenseComponent},
      {path: 'categories', component: CategoryComponent},
      {path: 'categories/:id', component: CategoryDetailComponent}
    ])
  ],
  providers: [ExpenseService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

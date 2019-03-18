import {NgModule} from '@angular/core';
import {CategoryComponent} from './category.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared/shared.module';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryDetailComponent
  ],
  imports: [
/*    CommonModule,
    FormsModule,*/
    RouterModule.forChild([
      {path: 'categories', component: CategoryComponent},
      {path: 'categories/:id', component: CategoryDetailComponent}
    ]),
    SharedModule
  ]
})
export class CategoryModule { }

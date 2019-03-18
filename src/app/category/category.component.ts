import { Component, OnInit } from '@angular/core';
import {ExpenseCategory} from '../category';
import {CategoryService} from '../services/category.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: ExpenseCategory[];

  selectedCategory: ExpenseCategory;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    // this.category = this.categoryService.getAllCategories();
/*    fetch('https://my-json-server.typicode.com/typicode/demo/posts')
      .then(response => response.json())
      .then(json => console.log(json));*/

    this.categoryService.getHttpData().subscribe(category => this.category = category);

  }

  selectCategory(category) {
    this.selectedCategory = category;
  }

  editCategory(category: ExpenseCategory) {
    category.title = 'Changed title';
  }
}

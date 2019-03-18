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
    this.categoryService.getHttpData().subscribe(category => this.category = category);
  }

  selectCategory(category) {
    this.selectedCategory = category;
  }
}

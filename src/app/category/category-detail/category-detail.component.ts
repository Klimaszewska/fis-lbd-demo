import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  idPassedFromAnotherComponent: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.idPassedFromAnotherComponent = +this.route.snapshot.paramMap.get('id');
  }

  back(): void {
    this.router.navigate(['/categories']);
  }
}

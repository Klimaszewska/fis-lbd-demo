import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  idPassedFromAnotherComponent: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.idPassedFromAnotherComponent = +this.route.snapshot.paramMap.get('id');
  }

}

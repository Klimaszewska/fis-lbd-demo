import { Injectable } from '@angular/core';
import {ExpenseCategory} from '../category';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private sampleUrl = 'https://my-json-server.typicode.com/typicode/demo/posts';

  constructor(private http: HttpClient) { }


  getAllCategories() {
    return [
      new ExpenseCategory(1, 'Savings', false),
      new ExpenseCategory(2, 'Services', true),
      new ExpenseCategory(3, 'Shopping', true),
    ];
  }

  getHttpData(): Observable<ExpenseCategory[]> {
    return this.http.get<ExpenseCategory[]>(this.sampleUrl).pipe(tap(data => console.log('All' + JSON.stringify(data))));
  }
}

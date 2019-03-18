export class ExpenseCategory {
  id: number;
  title: string;
  isPredefined: boolean;


  constructor( id: number, title: string, isPredefined: boolean) {
    this.id = id;
    this.title = title;
    this.isPredefined = isPredefined;
  }
}

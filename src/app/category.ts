export class ExpenseCategory {
  title: string;
  isPredefined: boolean;


  constructor(title: string, isPredefined: boolean) {
    this.title = title;
    this.isPredefined = isPredefined;
  }
}

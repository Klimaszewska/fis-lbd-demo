export class Expense {
  id: number;
  name: string;
  category: string;
  amountSpent: number;


  constructor(id: number, name: string, category: string, amountSpent: number) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.amountSpent = amountSpent;
  }
}

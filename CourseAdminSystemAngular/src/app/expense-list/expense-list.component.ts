import { Component } from '@angular/core';
import { Expense } from '../models/expense';
import { ExpenseComponent } from '../expense/expense.component';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [ExpenseComponent],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent {

  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe(listOfExpenses => {
      this.expenses = listOfExpenses;
    });
  }

}

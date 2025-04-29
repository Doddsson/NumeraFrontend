import { Component, Input } from '@angular/core';
import { Expense } from '../models/expense';
import { ExpenseService } from '../services/expense.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {

  constructor(private expenseService: ExpenseService, private router: Router) {}

  mode: number = 1

  @Input() expense?: Expense;

  deleteExpense() {
    this.expenseService.deleteExpense(this.expense!.id).subscribe();
  }

  editExpense(id: number) {
    this.router.navigate(["edit-expense", id])
  }

}

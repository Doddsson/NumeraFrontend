import { Component, Input } from '@angular/core';
import { Expense } from '../models/expense';
import { ExpenseService } from '../services/expense.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-expense',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-expense.component.html',
  styleUrl: './edit-expense.component.css'
})
export class EditExpenseComponent {

  @Input() id!: string;
  expense!: Expense;

  constructor(private expenseService: ExpenseService, private router: Router) {

  }

  ngOnInit() {
    this.expenseService.getExpenseById(+this.id).subscribe(expense => {
      this.expense = expense;
    });
  }

  updateExpense() {
    this.expenseService.updateExpense(this.expense).subscribe(() => {
      this.router.navigate(["expenses"]);
    });
  }

}

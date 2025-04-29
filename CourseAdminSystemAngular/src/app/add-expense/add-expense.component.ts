import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpenseService } from '../services/expense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent {

  constructor(private expenseService: ExpenseService, private router: Router) {}

  amount = new FormControl("", [Validators.required, Validators.pattern('\\d+')]);
  currency = new FormControl("", [Validators.required]);
  category = new FormControl("", [Validators.required]);
  //Thinking date could just be added automatically in the backend like with the user
  // date = new FormControl("", [Validators.required]);
  description = new FormControl("", [Validators.required]);
  userId = new FormControl("", [Validators.required, Validators.pattern('\\d')]);

  expenseForm = new FormGroup ({
    amount: this.amount,
    currency: this.currency,
    category: this.category,
    description: this.description,
    userId: this.userId
  })

  createExpense() {
    if (!this.expenseForm.valid) {
      console.log("Expense data is not valid")
      return;
    }

    this.expenseService.addExpense({
      id: 0,
      amount: Number(this.amount.value!),
      currency: this.currency.value!,
      category: this.category.value!,
      date: new Date(), //database sets the date to the current date
      description: this.description.value!,
      userId: Number(this.userId.value!)
    }).subscribe(() => {
      console.log("Expense created")
      this.router.navigate(["expenses"]);
    });
  }

}

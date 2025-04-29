import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from '../models/expense';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExpenseService {

  baseUrl: string = "http://localhost:5247/api"; //Backend port

  constructor(private http: HttpClient) { }

  // GET all expenses
  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${this.baseUrl}/expense`);
  }

  // GET expenses by user ID
  getExpensesByUserId(userId: number): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${this.baseUrl}/expense/user/${userId}`);
  }

  // GET single expense by ID
  getExpenseById(id: number): Observable<Expense> {
    return this.http.get<Expense>(`${this.baseUrl}/expense/${id}`);
  }

  // POST (create) a new expense
  addExpense(expense: Expense): Observable<any> {
    return this.http.post(`${this.baseUrl}/expense`, expense);
  }

  // PUT (update) an expense
  updateExpense(expense: Expense): Observable<any> {
    return this.http.put(`${this.baseUrl}/expense`, expense);
  }

  // DELETE an expense by ID
  deleteExpense(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/expense/${id}`);
  }
  
}



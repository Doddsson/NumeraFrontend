import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseComponent } from './expense/expense.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';

export const routes: Routes = [

    { path: 'user/:id', component: UserComponent },
    { path: 'users', component: UserListComponent },
    { path: "edit-user/:id", component: EditUserComponent },
    { path: "add-user", component: AddUserComponent },
    { path: 'expense', component: ExpenseComponent },
    { path: 'expenses', component: ExpenseListComponent },
    { path: "edit-expense/:id", component: EditExpenseComponent },
    { path: "add-expense", component: AddExpenseComponent },
];

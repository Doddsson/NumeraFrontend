import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule, RouterOutlet, RouterLink, UserComponent, UserListComponent, ExpenseComponent, ExpenseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'CourseAdminSystemAngular';
}

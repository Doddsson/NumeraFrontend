import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})

export class EditUserComponent {

  @Input() id!: string;
  user!: User;

  constructor(private userService: UserService, private router: Router) {

  }

  // Get User method
  ngOnInit() {
    this.userService.getUserById(+this.id).subscribe(user => {
      this.user = user;
    });
  }

  // Update method
  updateUser() {
    this.userService.updateUser(this.user).subscribe(() => {
      this.router.navigate(["users"]);
    });
  }

}


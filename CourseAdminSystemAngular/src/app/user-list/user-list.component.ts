import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserComponent } from '../user/user.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent {
  
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(listOfUsers => {
      this.users = listOfUsers;
    });
  }

}
  



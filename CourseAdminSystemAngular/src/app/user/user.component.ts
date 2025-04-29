import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {}

  mode: number = 1

  @Input() user?: User;

  ngOnInit(): void {
    // If no input user, check route for ID
    if (!this.user) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.userService.getUserById(+id).subscribe(user => {
          this.user = user;
        });
      }
    }
  }

  deleteUser() {
    this.userService.deleteUser(this.user!.id).subscribe(() => {
      this.router.navigate(["/users"]).then(() => {
        window.location.reload();  // This will reload the page and fetch fresh data
      });
    });
  }

  editUser(id: number) {
    this.router.navigate(["edit-user", id])
  }

}

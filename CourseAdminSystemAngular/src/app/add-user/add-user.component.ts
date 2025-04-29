import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  constructor(private userService: UserService, private router: Router) {}

  fullName = new FormControl("", [Validators.required]);
  username = new FormControl("", [Validators.required]);
  password =new FormControl("", [Validators.required]);
  email = new FormControl("", [Validators.required, Validators.email]);
  phone = new FormControl("", [Validators.required, Validators.pattern('\\d{8}')]); //if we want the phone number to be excactly 8 digits
  // create date will be set automatically in the backend

  userForm = new FormGroup({
    fullName: this.fullName,
    username: this.username,
    password: this.password,
    email: this.email,
    phone: this.phone,
  })

  createUser() {
    if (!this.userForm.valid) {
      console.log("User data is not valid")
      return;
    }

    this.userService.addUser({
      id: 0,
      fullName: this.fullName.value!,
      username: this.username.value!,
      email: this.email.value!,
      password: this.password.value!,
      phone: this.phone.value!,
      createDate: new Date()
    }).subscribe(() => {
        console.log("User created")
        this.router.navigate(["users"]);
    });
  }

}

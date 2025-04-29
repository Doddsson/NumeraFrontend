import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:5247/api"; //Backend port

  constructor(private http: HttpClient) { }

    // GET all users
    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(`${this.baseUrl}/user`);
    }
  
    // GET user by ID
    getUserById(id: number): Observable<User> {
      return this.http.get<User>(`${this.baseUrl}/user/${id}`);
    }
  
    // POST (create) a new user
    addUser(user: User): Observable<any> {
      return this.http.post(`${this.baseUrl}/user`, user);
    }
  
    // PUT (update) a user
    updateUser(user: User): Observable<any> {
      return this.http.put(`${this.baseUrl}/user`, user);
    }
  
    // DELETE a user by ID
    deleteUser(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/user/${id}`);
    }

}

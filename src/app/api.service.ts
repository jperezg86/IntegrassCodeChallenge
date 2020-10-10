import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from './models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_BASE_URL = "https://jsonplaceholder.typicode.com"
  private GET_USERS = "/users";
  constructor(private http: HttpClient) { }

  public getUsers() {
      return this.http.get<User[]>(`${this.API_BASE_URL + this.GET_USERS}`);
  }
}

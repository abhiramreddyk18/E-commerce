import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getproduct() {
    return this.http.get<any>("https://fakestoreapi.com/products")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  senduser(user: User) {

    return this.http.post("http://localhost:1234/user_register", user, { withCredentials: true });

  }


  login(user: any) {

    return this.http.post("http://localhost:1234/user_login", user, { withCredentials: true });

  }


  logout() {
    return this.http.get("http://localhost:1234/logout");
  }






}

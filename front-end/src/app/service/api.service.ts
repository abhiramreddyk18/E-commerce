import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiurl=environment.apiUrl;
  getproduct() {
    return this.http.get<any>("https://fakestoreapi.com/products")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  senduser(user: User) {

    return this.http.post(`${this.apiurl}/user_register`, user, { withCredentials: true });

  }


  login(user: any) {

    return this.http.post(`${this.apiurl}/user_login`, user, { withCredentials: true });

  }


  logout() {
    return this.http.get(`${this.apiurl}/logout`);
  }






}

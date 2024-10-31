import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../model/data-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  apiUrl='https://freeapi.gerasim.in/api/BigBasket/';

  selected:boolean=true;


  getAllProduct():Observable<ApiResponseModel> {
    debugger;
   return  this.http.get<ApiResponseModel>(`${this.apiUrl}GetAllProducts`);
  }


  getAllcategory():Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(`${this.apiUrl}GetAllCategory`);
  }

  getAllProductsByCategoryId(categoryId:number):Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(`${this.apiUrl}GetAllProductsByCategoryId?id=${categoryId}`);
  }

  onRegister(obj:any):Observable<ApiResponseModel>{
    console.log("resgister");
    return this.http.post<ApiResponseModel>(`${this.apiUrl}RegisterCustomer`,obj);
  } 


  selectlogin(select:boolean){
     this.selected=select;
  }

  login(){
    return this.selected;
  }

}

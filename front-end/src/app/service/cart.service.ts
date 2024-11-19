import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  
  public product:any=[];
  grandTotal:number=0;


 



    addtocart(item:Product){
      
        this.http.post("http://localhost:1234/add_to_cart",item,{ withCredentials: true }).subscribe((res)=>{
          console.log(res);
        },error=>{
          console.log(error);
        });
      }


      getproducts(){
        return this.http.get("http://localhost:1234/get_products",{withCredentials:true});
      }
      
         
      removeFromCart(item:Product){
        return this.http.post("http://localhost:1234/remove_from_cart",item,{withCredentials:true}).subscribe(res=>{
          console.log(res);
        })
    }

     
}

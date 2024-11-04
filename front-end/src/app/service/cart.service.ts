import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, isEmpty} from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  
  public product:any=[];
  grandTotal:number=0;

  length=new BehaviorSubject<number>(null);
  sendingproduct(item:any){
  
    for(var i=0;i<this.product.length;i++){
      var check=0;
      if(item.title==this.product[i].title){

        this.product[i].quantity=this.product[i].quantity+1;

        this.product[i].total=(this.product[i].price)*(this.product[i].quantity);

        this.grandTotal=this.product[i].total+this.grandTotal;

        check=1;
        break;
      }
    }

    if(!check)
      {
        this.product.push(item);

        this.grandTotal=this.grandTotal+item.price;

        this.length.next(this.product.length);
        check=0;
      }

   

  }

  get products(){
      return this.product;
  }


    RemoveItem(index:number){

      

      this.grandTotal=this.grandTotal-(this.product[index].quantity*this.product[index].price);
    this.product.splice(index,1);

        if(this.product.length==0){
          this.grandTotal=0;
        }
        
      this.length.next(this.products.length);
    
    }


    DecreaseQuantity(index:number){

        if(this.product[index].quantity>=1){

          this.product[index].quantity--;
          this.product[index].total=(this.product[index].price)*(this.product[index].quantity);

          this.grandTotal=this.grandTotal-this.product[index].price;

          if( this.product[index].quantity==0){
            this.product.splice(index,1);
            this.length.next(this.products.length);
            if(this.product.length==0){
              this.grandTotal=0;
             
            }


          }
        }
          
    }


    IncreaseQuantity(index:number){

      this.product[index].quantity++;

      this.product[index].total=(this.product[index].price)*(this.product[index].quantity);

      this.grandTotal=this.grandTotal+this.product[index].price;

      
          
    }


      RemoveAll(){
        this.product=[];
        this.length.next(this.products.length);
      }



      addtocart(item:Product){
        console.log("entered service");
        console.log(item.name);
        this.http.post("http://localhost:1234/add_to_cart",item,{ withCredentials: true }).subscribe((res)=>{
          console.log(res);
        },error=>{
          console.log(error);
        });
      }


      getproducts(){
        return this.http.get("http://localhost:1234/get_products",{withCredentials:true});
      }
          

     









}

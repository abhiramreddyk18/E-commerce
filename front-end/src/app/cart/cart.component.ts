import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  public product:any=[];
  TotalPrice:number;

constructor(private cartservice:CartService,private router:Router){}


ngOnInit(){


    this.cartservice.getproducts().subscribe(res=>{
     
      this.product=res;
      
    },error=>{
      console.log(error);
  });

}


onDelete(index:number){

this.cartservice.RemoveItem(index);
this.TotalPrice=this.cartservice.grandTotal;
this.product=this.cartservice.products;

}
 


DecreaseItem(index:number){

  this.product[index].quantity-=1;
  if(this.product[index].quantity==0){
    this.product.splice(index,1);
  }
  this.cartservice.removeFromCart(this.product[index]);

}


IncreaseItem(index:number){
  this.product[index].quantity+=1;
  this.cartservice.addtocart(this.product[index]);
}


ShopMore(){
  this.router.navigate(['products']);
}



RemoveAll(){
  this.cartservice.RemoveAll();

  this.product=this.cartservice.product;
}
 
 


}





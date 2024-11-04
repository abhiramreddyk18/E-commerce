import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

import { CartComponent } from '../cart/cart.component';
import { CartService } from '../service/cart.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  public productList:any;
  public Allproducts:any;

 product:Product=new Product('','','','',0,0,0);
  

  constructor(private apiservice:ApiService,private cartservice:CartService,private router:Router){}

  ngOnInit(): void {
      this.apiservice.getproduct().subscribe(res=>{
        this.Allproducts=res;
        
        this.Allproducts.forEach(element => {
          Object.assign(element,{quantity:1,total:element.price});
          
        });

        this.productList=this.Allproducts;

        console.log(this.Allproducts);
      });

      
  }


  addToCart(item:any){
    this.product=new Product (item.id,item.title,item.image,item.description,1,item.price,item.total); 
     
    this.cartservice.addtocart(this.product);
      
    }

  

category(category:string){

    this.productList=[];
    if(category=="All") this.productList=this.Allproducts;
    else{
      this.Allproducts.forEach(element=>{

        if(element.category[0]==category[0]){
          this.productList.push(element);
        }
      });
  
      console.log(this.productList);
    }
    
}

gotoproduct(id:string){
  this.router.navigate(['/product-details',id]);
}

}

  




import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ApiResponseModel, CategoryModel, Iproduct } from '../../core/model/data-model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  productservice=inject(ProductService);


  productList:Iproduct[]=[];
  categoryList$:Observable<ApiResponseModel> | undefined;

  ngOnInit(): void {
    debugger;
      this.getProducts();

      this.categoryList$=this.productservice.getAllcategory();

  }


  getProductsByCategory(id:number){
    this.productservice.getAllProductsByCategoryId(id).subscribe(res=>{
      this.productList=res.data;
    })
  }

  getProducts(){
    debugger;
    this.productservice.getAllProduct().subscribe((res:ApiResponseModel)=>{
      debugger;
        this.productList=res.data;
        console.log(this.productList);

    },error=>{
      debugger;
      alert('Error from api');
    })
  }

}

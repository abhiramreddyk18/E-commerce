import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './core/services/product.service';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FormsModule,CommonModule,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

 

  constructor(private productService:ProductService, ){}

  showLoginModal = false;
 

  ngOnInit(): void {
    
  }


  

  

}

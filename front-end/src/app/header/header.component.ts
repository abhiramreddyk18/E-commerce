import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownDirective } from '../dropdown.directive';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,DropdownDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private productservice:ProductService){}


  login(){

    this.productservice.selectlogin(true);

  }

}

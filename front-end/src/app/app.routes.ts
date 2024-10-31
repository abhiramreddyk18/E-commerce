import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:ProductListComponent
    },
    {
        path:'checkout',
        component:CheckoutComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'**',
        component:ProductListComponent
    }
];

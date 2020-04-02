import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { OrderComponent } from './order/order.component';
import { StoreFormComponent } from './store/store-form/store-form.component';


const routes: Routes = [
  { path: 'new-customer', component: CustomerFormComponent },
  { path: 'new-store', component: StoreFormComponent },
  { path: 'new-order', component: OrderComponent },
  { path: '', redirectTo: 'new-store', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

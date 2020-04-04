import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from './auth/auth.guard';
import { CustomerFormComponent } from "./customer/customer-form/customer-form.component";
import { LandingComponent } from "./landing/landing.component";
import { OrderComponent } from "./order/order.component";
import { StoreFormComponent } from "./store/store-form/store-form.component";

const routes: Routes = [
  { path: "new-customer", component: CustomerFormComponent, canActivate: [AuthGuard] },
  { path: "new-store", component: StoreFormComponent, canActivate: [AuthGuard] },
  { path: "new-order", component: OrderComponent, canActivate: [AuthGuard] },
  { path: "login", component: AuthComponent },
  { path: "", component: LandingComponent },
  { path: "**", redirectTo: "", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

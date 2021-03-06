import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AddressComponent } from './common/address/address.component';
import { ContactComponent } from './common/contact/contact.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { LandingComponent } from './landing/landing.component';
import { MaterialModule } from './material/material.module';
import { OrderComponent } from './order/order.component';
import { StoreFormComponent } from './store/store-form/store-form.component';
import { StoreListComponent } from './store/store-list/store-list.component';
@NgModule({
  declarations: [
    AppComponent,
    StoreListComponent,
    StoreFormComponent,
    AddressComponent,
    CustomerFormComponent,
    ContactComponent,
    OrderComponent,
    AuthComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AmplifyAngularModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

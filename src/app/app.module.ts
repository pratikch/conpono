import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './common/address/address.component';
import { ContactComponent } from './common/contact/contact.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
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
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

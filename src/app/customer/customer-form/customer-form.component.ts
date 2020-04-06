import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/API.service';
import { AddressComponent } from 'src/app/common/address/address.component';
import { ContactComponent } from 'src/app/common/contact/contact.component';

@Component({
  selector: 'conpono-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent {
  @ViewChild(AddressComponent, {static: true}) addressForm: AddressComponent;
  @ViewChild(ContactComponent, {static: true}) contactForm: ContactComponent;
  
  customerForm: FormGroup;

  constructor(private fb: FormBuilder, private apiservice: APIService) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: null,
      address: this.addressForm.createAddressGroup(),
      contact: this.contactForm.createContactGroup(),
      shipping: ['pick', Validators.required]
    });
  }
  
  async onSubmit() {
    // console.log(this.storeForm);
    const id = ''+Math.floor((Math.random()*1000000000));
    const customerInput = {
      name: this.customerForm.value.name,
      address: this.customerForm.value.address.address,
      address2: this.customerForm.value.address.address2,
      city: this.customerForm.value.address.city,
      state: this.customerForm.value.address.state,
      zipCode: this.customerForm.value.address.postalCode,
      status: this.customerForm.value.status,
      shippingPreference: this.customerForm.value.shipping,
      phone: this.customerForm.value.contact.phone,
      email: this.customerForm.value.contact.email,
      customerId: id,
      id
    };
    await this.apiservice.CreateCustomer(customerInput);

    this.customerForm.reset();
  }
}

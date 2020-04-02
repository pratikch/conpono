import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: null,
      address: this.addressForm.createAddressGroup(),
      contact: this.contactForm.createContactGroup(),
      shipping: ['pick', Validators.required]
    });
  }
  
  onSubmit() {
    alert('Thanks!');
  }
}

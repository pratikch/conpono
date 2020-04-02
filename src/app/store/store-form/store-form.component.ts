import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressComponent } from 'src/app/common/address/address.component';
import { ContactComponent } from 'src/app/common/contact/contact.component';

@Component({
  selector: 'conpono-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.scss']
})
export class StoreFormComponent implements OnInit {
  @ViewChild(AddressComponent, {static: true}) addressForm: AddressComponent;
  @ViewChild(ContactComponent, {static: true}) contactForm: ContactComponent;
  storeForm: FormGroup;
  
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.storeForm = this.fb.group({
      name: null,
      contactName: [null, Validators.required],
      address: this.addressForm.createAddressGroup(),
      contact: this.contactForm.createContactGroup(),
      shipping: ['curb', Validators.required],
      status: ['active'],
      capacity: this.fb.group({
        curb: [0],
        delivery:[0]
      })
    });
  }

  get capacityForm(): FormGroup {
    return this.storeForm.controls.capacity as FormGroup;
  }
  onSubmit() {
    alert('Thanks!');
  }
}

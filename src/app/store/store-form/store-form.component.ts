import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/API.service';
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
  
  constructor(private fb: FormBuilder,
    private apiservice: APIService) {}
  ngOnInit(): void {
    this.storeForm = this.fb.group({
      name: [null, Validators.required],
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
    // console.log(this.storeForm);
    const storeInput = {
      name: this.storeForm.value.name,
      contactName: this.storeForm.value.contactName,
      address: this.storeForm.value.address.address,
      address2: this.storeForm.value.address.address2,
      city: this.storeForm.value.address.city,
      state: this.storeForm.value.address.state,
      postalCode: this.storeForm.value.address.postalCode,
      status: this.storeForm.value.status,
      curbCapacity: this.storeForm.value.capacity.curb,
      deliveryCapacity: this.storeForm.value.capacity.delivery,
      shipPreferance: this.storeForm.value.shipping,
      phone: this.storeForm.value.contact.phone,
      email: this.storeForm.value.contact.email,
    }
    this.apiservice.CreateStore(storeInput);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'conpono-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup
  itemForm = {
    item: [],
    unit: [],
    weight: [],
    size: [],
    quantity: [],
  };

  units = [
    {name: 'Weight', abbreviation: 'wi'},
    {name: 'Size', abbreviation: 'si'},
  ];

  sizes = [
    {name: 'X-Small', abbreviation: 'xs'},
    {name: 'Small', abbreviation: 's'},
    {name: 'Medium', abbreviation: 'm'},
    {name: 'Large', abbreviation: 'l'},
    {name: 'X-Large', abbreviation: 'xl'},
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      items: this.fb.array([this.fb.group(this.itemForm)])
    });
  }

  get itemFormArray(): FormArray {
    return this.orderForm.controls.items as FormArray;
  }

  public addItemAt(): void {
    this.itemFormArray.push(this.fb.group(this.itemForm));
  }

  public removeItemAt(idx: number): void  {
    this.itemFormArray.removeAt(idx);
  }
}

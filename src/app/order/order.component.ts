import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { APIService, OrderStatus } from '../API.service';

@Component({
  selector: "conpono-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  itemForm = {
    item: ["", Validators.required],
    unit: ["", Validators.required],
    weight: "1",
    size: "m",
    quantity: ["1", Validators.required]
  };

  units = [
    { name: "Weight", abbreviation: "wi" },
    { name: "Size", abbreviation: "si" }
  ];

  sizes = [
    { name: "X-Small", abbreviation: "xs" },
    { name: "Small", abbreviation: "s" },
    { name: "Medium", abbreviation: "m" },
    { name: "Large", abbreviation: "l" },
    { name: "X-Large", abbreviation: "xl" }
  ];

  constructor(private fb: FormBuilder, private apiservice: APIService) {}

  ngOnInit() {
    this.orderForm = this.fb.group({
      brandSubstitution: [true],
      items: this.fb.array([this.fb.group(this.itemForm)])
    });
  }

  get itemFormArray(): FormArray {
    return this.orderForm.controls.items as FormArray;
  }

  public addItemAt(): void {
    this.itemFormArray.push(this.fb.group(this.itemForm));
    console.log("item" + (this.itemFormArray.length - 1));
    setTimeout(() =>
      document.getElementById("item" + (this.itemFormArray.length - 1)).focus()
    );
  }

  public removeItemAt(idx: number): void {
    this.itemFormArray.removeAt(idx);
  }

  async onSubmit() {
    console.log(this.orderForm);
    
    const items = this.itemFormArray.controls.map(fg => {
      console.log(fg.value);
      return {
        
      }
    });
    const order = {
      orderId: ''+Math.floor(Math.random()*new Date().getUTCMilliseconds()),
      brandSubstitution: this.orderForm.value.brandSubstitution,
      status: OrderStatus.NEW,

    };
    await this.apiservice.CreateOrderWithItems(order)
  }
}

import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "conpono-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  public createContactGroup(): FormGroup {
    this.contactForm = this.fb.group({
      phone: [null, Validators.required],
      email: [null, Validators.required]
    });
    return this.contactForm;
  }
}

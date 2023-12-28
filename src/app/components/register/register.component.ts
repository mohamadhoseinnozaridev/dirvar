import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // Register code//
  step = 1;

  form: FormGroup;
  phonenumber = new FormControl('', [
    Validators.required,
    Validators.minLength(11),
  ]);
  // Verification code//
  formone: FormGroup;
  Verificationcode = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({
      phonenumber: this.phonenumber,
    });
    // Verification code//
    this.formone = this.builder.group({
      Verificationcode: this.Verificationcode,
    });
  }

  ngOnInit() {}

  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }

  sendcomment() {
    if (this.form.valid) {
      this.step = 2;
    } else {
      this.step = 1;
    }
  }
  sendcommentone() {
    console.log(this.Verificationcode);
  }

  OnForm($event: string) {
    this.step = 2;
  }
  OnFormone($event: string) {}
}

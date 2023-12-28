import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-phonenumber-form',
  templateUrl: './phonenumber-form.component.html',
  styleUrls: ['./phonenumber-form.component.scss'],
})
export class PhonenumberFormComponent implements OnInit {
  @Output() onChange = new EventEmitter<string>();
  form: FormGroup;
  phonenumber = new FormControl('', [
    Validators.required,
    Validators.minLength(11),
  ]);

  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({
      phonenumber: this.phonenumber,
    });
  }

  ngOnInit() {}

  sendcomment() {
    if (this.form.valid) {
      this.onChange.emit(this.phonenumber.value?.toString());
    }
  }
}

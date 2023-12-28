import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Verification_code',
  templateUrl: './Verification_code.component.html',
  styleUrls: ['./Verification_code.component.css'],
})
export class Verification_codeComponent implements OnInit {
  @Output() onchangeone = new EventEmitter<string>();
  // Verification code//
  formone: FormGroup;
  Verificationcode = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  constructor(private builder: FormBuilder, private router: Router) {
    // Verification code//
    this.formone = this.builder.group({
      Verificationcode: this.Verificationcode,
    });
  }

  ngOnInit() {}

  sendcommentone() {
    this.router.navigateByUrl('/final');
  }

  OnClick() {}
}

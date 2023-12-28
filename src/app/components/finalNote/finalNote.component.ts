import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-finalNote',
  templateUrl: './finalNote.component.html',
  styleUrls: ['./finalNote.component.css'],
})
export class FinalNoteComponent implements OnInit {
  formfinal: FormGroup;
  finalnote = new FormControl('', [
    Validators.required,
    Validators.maxLength(5),
  ]);
  finalvadie = new FormControl('', [
    Validators.required,
    Validators.maxLength(5),
  ]);
  finalejare = new FormControl('', [
    Validators.required,
    Validators.maxLength(5),
  ]);
  finalroom = new FormControl('', [Validators.required]);
  finalfloor = new FormControl('', [Validators.required]);
  finalelevator = new FormControl('', [Validators.required]);
  finalparking = new FormControl('', [Validators.required]);
  constructor(private builder: FormBuilder) {
    this.formfinal = this.builder.group({
      finalnote: this.finalnote,
      finalvadie: this.finalvadie,
      finalejare: this.finalejare,
      finalroom: this.finalroom,
      finalfloor: this.finalfloor,
      finalelevator: this.finalelevator,
      finalparking: this.finalparking,
    });
  }

  ngOnInit() {}
  sendfinalnote() {
    console.log(this.formfinal);
    console.log(this.finalvadie);
    console.log(this.finalejare);
    console.log(this.finalroom);
    console.log(this.finalfloor);
    console.log(this.finalelevator);
    console.log(this.finalelevator);
  }
}

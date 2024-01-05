import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css']
})
export class FormsReactiveComponent implements OnInit {

  name = new FormControl('');
  newname = new FormControl('');
  abaf = 'flink1';

  // FormGroup
  personForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      number: new FormControl(''),
      district: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
    })
  });

  // Trabalhando com formBuilder:
  personFormBuilder = this.frmBuilder.group({
    fname: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
    lname: [''],
    address: this.frmBuilder.group({
      street: [''],
      number: [''],
      district: [''],
      city: [''],
      state: [''],
    })
  });

  constructor(private frmBuilder: FormBuilder) { }

  ngOnInit() {
    this.personForm.patchValue({
      fname: 'Anderson',
      address: {
        street: 'Street Default'
      }
    });
  }

  updateName() {
    this.name.setValue(this.newname.value);
  }

  onSubmit() {
    console.warn(this.personForm);
  }

  onSubmitFrmBuilder() {
    console.log(this.personFormBuilder);
  }
}

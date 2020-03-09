import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Register } from './register-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  form : FormGroup
  submitted = false;

  constructor(private registerService : RegisterService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({ 
      email: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(3)]],
      address: [null, [Validators.required, Validators.minLength(3)]],
      city: [null, [Validators.required, Validators.minLength(3)]]
    });
    
  }

  onSubmit(){
    this.submitted = true;
  }

  onCancel(){
    this.submitted = false;
  }


}

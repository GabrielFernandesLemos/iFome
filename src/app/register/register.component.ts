import { Routes, Router } from '@angular/router';
import { RegisterService } from './register.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mt-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  form : FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder, private registerService : RegisterService, private router : Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null],
      password: [null],
      address: [null],
      city: [null]
    });
  }

  onSubmit(){
    this.submitted = true;
    console.log("Valores do formulário: " + this.form)

    this.registerService.PostRegister(this.form)
    this.router.navigate(['/login'])
  }

  onCancel(){
    this.submitted = false;
  }

  limpar(){
    this.form.reset();
  }

}

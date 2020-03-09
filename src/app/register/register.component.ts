import { RegisterService } from './register.service';
import { Register } from './register-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registerModel = new Register("", "", "", "", "");

  constructor(private registerService : RegisterService ) { }

  ngOnInit() {
  }

  onSubmit(){
    
  }


}

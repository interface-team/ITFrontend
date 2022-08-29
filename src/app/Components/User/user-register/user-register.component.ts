// Reactive Approach

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  @Output() closeRegister: EventEmitter<any> = new EventEmitter();// for sending data to parent component

  registerForm:FormGroup;

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.registerUser();
  }

  registerUser(){
    this.registerForm = new FormGroup({
      firstName: new FormControl(null,[Validators.required]),
      lastName: new FormControl(null),
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null,[Validators.required]),
      mobile: new FormControl(null,[Validators.required])
    },{
      validators:[this.MobileValidator,this.passwordMatchingValidator]        // user define validator
    });
  }

  MobileValidator(control:AbstractControl): {[key: string]: boolean} | null {
    var mobile =control.get('mobile')?.value
    var regex:RegExp  = /^\(?([6-9]{1})\)?(\d{9})$/;
    return regex.test(mobile)?null:{mobilematched: true};
  }

  passwordMatchingValidator(control: AbstractControl): { [key: string]: boolean } | null {
    return control.get('password')?.value ===
      control.get('confirmPassword')?.value
      ? null
      : { passwordmatched: true };
  }

  onSubmit(){
    console.log(this.registerForm)
  }

  closePopup(){
    this.closeRegister.emit("1");
  }

  get userFirstName(){
    return this.registerForm.get('firstName') as FormControl;
  }

  get userLastName(){
    return this.registerForm.get('lastName') as FormControl;
  }

  get userEmail(){
    return this.registerForm.get('email') as FormControl;
  }

  get userPassword(){
    return this.registerForm.get('password') as FormControl;
  }

  get userConfirmPassword(){
    return this.registerForm.get('confirmPassword') as FormControl;
  }

  get userMobile(){
    return this.registerForm.get('mobile') as FormControl;
  }

}

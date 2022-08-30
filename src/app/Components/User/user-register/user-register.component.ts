// Reactive Approach

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterDetail } from 'src/app/Models/user-register-detail.model';
import { UserservicesService } from 'src/app/Services/userservices.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  @Output() closeRegister: EventEmitter<any> = new EventEmitter();// for sending data to parent component

  registerForm: FormGroup;
  RegisterStatus: String="";
  userDetail: UserRegisterDetail = new UserRegisterDetail();

  constructor(private route: Router, private userService: UserservicesService) { }

  ngOnInit(): void {
    console.log("onit");
    this.registerUser();
    console.log("onit-end");
  }

  registerUser() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required])
    }, {
      validators: [this.MobileValidator, this.passwordMatchingValidator]        // user define validator
    });
  }

  MobileValidator(control: AbstractControl): { [key: string]: boolean } | null {
    var mobile = control.get('mobile')?.value
    var regex: RegExp = /^\(?([6-9]{1})\)?(\d{9})$/;
    return regex.test(mobile) ? null : { mobilematched: true };
  }

  passwordMatchingValidator(control: AbstractControl): { [key: string]: boolean } | null {
    return control.get('password')?.value ===
      control.get('confirmPassword')?.value
      ? null
      : { passwordmatched: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {


      console.log("me");
      this.userDetail.FirstName = this.userFirstName.value;
      this.userDetail.LastNAme = this.userLastName.value;
      this.userDetail.Email = this.userEmail.value;
      this.userDetail.Password = this.userPassword.value;
      this.userDetail.Mobile = this.userMobile.value;
      //console.log("test"+this.userDetail.Email);
      this.userService.registerUser(this.userDetail).subscribe(data => {
        console.log("service call : " + data);
        if(data==1)
          //this.closePopup();
          this.RegisterStatus = "Register Successfully !";
        else
          this.RegisterStatus = "User Already Exist";
      });
    } else {
      console.log("error");
    }
  }

  closePopup() {
    this.closeRegister.emit("1");
  }

  get userFirstName() {
    return this.registerForm.get('firstName') as FormControl;
  }

  get userLastName() {
    return this.registerForm.get('lastName') as FormControl;
  }

  get userEmail() {
    return this.registerForm.get('email') as FormControl;
  }

  get userPassword() {
    return this.registerForm.get('password') as FormControl;
  }

  get userConfirmPassword() {
    return this.registerForm.get('confirmPassword') as FormControl;
  }

  get userMobile() {
    return this.registerForm.get('mobile') as FormControl;
  }

}

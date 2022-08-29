// Reactive Form Approach
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() close: EventEmitter<any> = new EventEmitter();// for sending data to parent component
  loginForm: FormGroup;


  constructor(private route:Router) { }

  ngOnInit(): void {
    this.loginFormDetail();
  }

  loginFormDetail(){
    this.loginForm=new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(8)])
    });
  }

  //create below function to access input field and cleanup html code
  get userEmail(){
    return this.loginForm.get("email") as FormControl;
  }

  get userPassword(){
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit(){
    console.log(this.loginForm.controls["password"]);
  }

  closePopup(){
    this.close.emit("1");
  }

}

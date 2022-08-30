// Reactive Form Approach
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginDetail } from 'src/app/Models/user-login-detail.model';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() close: EventEmitter<any> = new EventEmitter();// for sending data to parent component
  loginForm: FormGroup;
  detail : UserLoginDetail = new UserLoginDetail();


  constructor(private route:Router, private homeService:HomeService) { }

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
    if (this.loginForm.valid) {
      this.detail.Email = this.userEmail.value;
      this.detail.Password = this.userPassword.value;
      this.homeService.login(this.detail).subscribe(data => {
        console.log(data);
        if(data.UserType=='U')
          this.route.navigate(['/userHome']);
        else if(data.UserType=='A')
          this.route.navigate(['/adminHome']);
      });
    } else {
      console.log("error");
    }
  }

  closePopup(){
    this.close.emit("1");
  }

}

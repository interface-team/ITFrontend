import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hiddenLoginForm:boolean=true;
  hiddenUserRegisterForm=true;
  constructor() { }

  ngOnInit(): void {
  }

  loginComp(data:any){
    this.hiddenLoginForm=data;
  }

  registerComponent(data:any){
    this.hiddenUserRegisterForm=data;
  }

  closeEvents(data:any){
    this.hiddenLoginForm=true;
    this.hiddenUserRegisterForm=true;
  }
}

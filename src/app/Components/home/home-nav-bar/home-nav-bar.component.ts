import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-nav-bar',
  templateUrl: './home-nav-bar.component.html',
  styleUrls: ['./home-nav-bar.component.css']
})
export class HomeNavBarComponent implements OnInit {

  @Output() loginComp: EventEmitter<any>=new EventEmitter();
  @Output() userRegisterComp: EventEmitter<any>=new EventEmitter();

  displayLogin = true;
  displayRegister = true;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  callLogin(){
    if(this.displayLogin){
      this.displayLogin=false;
    }
    else{
      this.displayLogin=true;
    }
    this.displayRegister=true;
    this.userRegisterComp.emit(this.displayRegister);
    this.loginComp.emit(this.displayLogin);
  }

  callUserRegister(){
    if(this.displayRegister)
      this.displayRegister=false;
    else
      this.displayRegister=true;
    this.displayLogin=true;
    this.loginComp.emit(this.displayLogin);
    this.userRegisterComp.emit(this.displayRegister);
  }

  setHome(){
    debugger;
    console.log("test")
    this.displayLogin=true;
    this.displayRegister=true;
    this.loginComp.emit(this.displayLogin);
    this.userRegisterComp.emit(this.displayRegister);
  }
}

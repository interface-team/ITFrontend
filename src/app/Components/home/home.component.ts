import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayLogin:boolean=true;
  displayUserRegister=true;
  constructor() { }

  ngOnInit(): void {
  }

  loginComp(data:any){
    this.displayLogin=data;
  }

  registerComponent(data:any){
    this.displayUserRegister=data;
  }

  closeEvent(data:any){
    this.displayLogin=true;
    this.displayUserRegister=true;
  }
}

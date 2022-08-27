import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  closePopup(){
    this.close.emit("1");
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegisterDetail } from 'src/app/Models/user-register-detail.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  private apiURL:string ;

  constructor(private httpClient: HttpClient) {
    this.apiURL = environment.apiURL;
   }

  registerUser(data: UserRegisterDetail){
    var url= environment.apiURL + "User/UserSignUp";
    return this.httpClient.post(url,data);
  }

  loginUser(data: any){
    var url= environment.apiURL;
  }
}

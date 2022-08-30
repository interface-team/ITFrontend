import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDetail } from '../Models/user-detail.mode';
import { UserLoginDetail } from '../Models/user-login-detail.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  user :UserDetail= new UserDetail();
  constructor(private http: HttpClient) { }

  login(data: UserLoginDetail){
    var url= environment.apiURL + "User/UserLogin";
    return this.http.post(url,data).pipe(
      map((x)=>{
        console.log(Object.values(x)[0].UID);
        this.user.Email=Object.values(x)[0].Email;
        this.user.FisrtName=Object.values(x)[0].FirstName;
        this.user.LastName=Object.values(x)[0].LastName;
        this.user.Mobile=Object.values(x)[0].Mobile;
        this.user.UserType=Object.values(x)[0].UserType;
        return this.user;
      })
    );
  }
}

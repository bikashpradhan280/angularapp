import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  preserveWhitespaces: true,
})
export class LoginComponent {

  login(userId:any, password:any){
    if(userId=='bikash' && password=='123'){
      sessionStorage.setItem('isLoggedIn','true');
    }else{
      sessionStorage.setItem('isLoggedIn','false');
    }
  }

}

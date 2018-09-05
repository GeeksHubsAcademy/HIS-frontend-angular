import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  password;
  error = '';
  constructor( private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }
  login(e) {
   
    e.preventDefault();
    
    if (this.apiService.login(this.user, this.password)) {
      this.error  = '';
      this.user = '';
      this.password = '';

      // go to dashboard
      this.router.navigate(['dashboard'])

    } else {
      this.error = 'Usuario o contraseña incorrecta'
    }

  }

}

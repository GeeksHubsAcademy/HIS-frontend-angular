import { Component, OnInit } from '@angular/core';
import { StateManagerService } from '../services/state-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  state;
  constructor(private stateManager: StateManagerService, private router : Router) {
    this.state = stateManager.getState();
   }

  ngOnInit() {
  }
  logout(){
    this.stateManager.logout();
    this.router.navigate(['login'])
  }

}

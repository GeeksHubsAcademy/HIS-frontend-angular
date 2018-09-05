import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {
  state = {
    auth: null
  }
  constructor() { }
  isLogged() {
    return this.state.auth
  }
  getState() {
    return this.state
  }
  getRole() {
    return this.state.auth && this.state.auth.role
  }
  login(user) {
    this.state.auth = user;
  }
  logout() {
    this.state.auth = null;
  }
}

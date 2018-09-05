import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { StateManagerService } from './state-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private stateManager: StateManagerService) {
  }
  canActivate() {
    return this.stateManager.getRole() === 'admin'
  }
}

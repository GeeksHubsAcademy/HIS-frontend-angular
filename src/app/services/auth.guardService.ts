import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StateManagerService } from './state-manager.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private stateManager: StateManagerService, private router: Router) {
    }
    canActivate() {
        let isLogged = this.stateManager.isLogged()
        if (!isLogged) {
            this.router.navigate(['login'])
        }
        return !!isLogged
    }
}

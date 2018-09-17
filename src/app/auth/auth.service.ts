import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {

  loggedIn = false;

  constructor( private router: Router ) { }

  login(username: string, password: string) {
    this.loggedIn = (username === 'ABC' && password === '1234');
    console.log(this.loggedIn);
    if (this.loggedIn) {
      this.router.navigate(['/friend']); }
  } // End of login method

  logout() {
    this.loggedIn = false;
    this.router.navigate(['/']);
  } // End of logout method

  isAuthenticated() {
    const promise = new Promise (
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 1000);
      }
    );
    return promise;
  } // End of isAuthenticated method
}

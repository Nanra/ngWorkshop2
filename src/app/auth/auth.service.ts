import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {

  loggedIn = false;
  nama = 'Nanra';
  pass = 'nanra1234';

  constructor( private router: Router, private toast: ToastrService ) { }

  login(username: string, password: string) {
    this.loggedIn = (username === this.nama && password === this.pass);
    console.log('Status Login: ' + this.loggedIn);
    if (this.loggedIn) {
      this.router.navigate(['/friend']);
      this.toast.success(`Selamat Datang ${username}`, 'Success', {
        positionClass: 'toast-top-right'
      });
      console.log(`User ${username} Logged In`);
    }
    if (username === this.nama && password !== this.pass ) {
      console.log('Password tidak cocok');
      this.toast.error('Password tidak cocok', 'Login Gagal', {
        positionClass: 'toast-top-center'
      });
    } if (username !== this.nama && password !== this.pass) {
      this.toast.error(`User ${username} tidak ditemukan`, 'Login Gagal', {
        positionClass: 'toast-top-center'
      });
      console.log(`User ${username} tidak ditemukan`);
    }
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

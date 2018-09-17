import { AuthGuardService } from './auth/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendComponent } from './friend/friend.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

// Deklarasi Var Array untuk routing page
const appRoute: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'friend', component: FriendComponent},
  {path: 'friend', canActivate: [AuthGuardService], component: FriendComponent},
  {path: 'contactus', component: ContactUsComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute) // Memanggil var Array routing
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

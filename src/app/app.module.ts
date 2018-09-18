import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { FriendComponent } from './friend/friend.component';
import { AddFriendComponent } from './friend/add-friend/add-friend.component';
import { FriendListComponent } from './friend/friend-list/friend-list.component';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FindPipe } from './find.pipe';




@NgModule({
  declarations: [
    AppComponent,
    FriendComponent,
    AddFriendComponent,
    FriendListComponent,
    HoverHighlightDirective,
    HeaderComponent,
    HomeComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    FindPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

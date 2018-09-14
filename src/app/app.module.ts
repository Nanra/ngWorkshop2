import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FriendComponent } from './friend/friend.component';
import { AddFriendComponent } from './friend/add-friend/add-friend.component';
import { FriendListComponent } from './friend/friend-list/friend-list.component';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './/app-routing.module';

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FriendComponent } from './friend/friend.component';
import { AddFriendComponent } from './friend/add-friend/add-friend.component';
import { FriendListComponent } from './friend/friend-list/friend-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendComponent,
    AddFriendComponent,
    FriendListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Friend } from './friend.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  friendAdded = new EventEmitter<void>();
  
  private friendList: Friend[] = [
    new Friend('Alfath Rajaya', 'alfath@email.com', 'Medan', '087265342')
  ];

  constructor() { }

  addFriend(newFriendInfo) {
    this.friendList.push(newFriendInfo);
    this.friendAdded.emit();
  }

  getFriends() {
    return this.friendList.slice();
  }



}

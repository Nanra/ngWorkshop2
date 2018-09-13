import { Friend } from './friend.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  friendList: Friend [] = [
    new Friend('Sumarsono', 'sumar@email.com', 'Cirebon', '827839')
  ];

  constructor() { }

  ngOnInit() {
  }

  onFriendAdded(newFriendInfo) {
    console.log(newFriendInfo);
    this.friendList.push(newFriendInfo);
    console.log(this.friendList);
  }

}

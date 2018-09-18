import { FriendsService } from './friends.service';
import { Friend } from './friend.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css'],
  providers: [FriendsService]
})
export class FriendComponent implements OnInit {

  friendList: Friend [] = [];

  constructor(private friendService: FriendsService) { }

  ngOnInit() {
    console.log('Get Friendlist');
    // this.friendList = this.friendService.getFriends();
    this.friendService.loadFriends().subscribe((result: any) => {
      console.log(result);
      this.friendList = result.body;
    },
    error => {
      console.log('Eroorr Gan');
      console.log(error);
    });

    // this.friendService.friendAdded.subscribe(() => {
    //   this.friendList = this.friendService.getFriends();
    // });
  }

  onFriendAdded(newFriendInfo) {
    console.log(newFriendInfo);
    this.friendList.push(newFriendInfo);
    console.log(this.friendList);
  }

}

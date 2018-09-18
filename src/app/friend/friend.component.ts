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
<<<<<<< HEAD
    console.log('Get Friendlist');
    // this.friendList = this.friendService.getFriends();
    this.friendService.loadFriends().subscribe((result: any) => {
      console.log(result);
      this.friendList = result.body;
    },
    error => {
      console.log('Eroorr Gan');
      console.log(error);
=======
    // this.friendList = this.friendService.getFriends();

    this.friendService.loadFriends().subscribe(result => {
      this.friendList = this.friendService.getFriends();
    });


    this.friendService.friendAdded.subscribe(() => {
      this.friendList = this.friendService.getFriends();
>>>>>>> 81f3382d923a72cd59311e4df70cb2cd40a498d8
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

import { Friend } from './../friend.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  // Var Array penampung nilai array dari Object Friend
  @Input() myFriends: Friend [];

  constructor() { }

  ngOnInit() {
  }

}

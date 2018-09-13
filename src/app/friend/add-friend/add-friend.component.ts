import { Friend } from './../friend.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {

  // Variabel objek baru inherence dari class Friend yang dari modul friend.modul.ts
  inputInfo: Friend = new Friend ('', '', '');

  constructor() { }

  ngOnInit() {
  }

}

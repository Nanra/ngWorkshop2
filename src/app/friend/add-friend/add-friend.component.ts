import { Friend } from './../friend.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {

  // Variabel objek baru inherence dari class Friend yang dari modul friend.modul.ts
  inputInfo: Friend = new Friend ('', '', '');
  @ViewChild('inputContact') inputContact: ElementRef;

  constructor() { }

  onAddFriend(inputEmail: HTMLInputElement) {
    console.log('Add Friend');
    console.log(this.inputInfo);
    console.log('Email : ' + inputEmail.value);
    console.log('Contact : ' + (this.inputContact.nativeElement.value));
  }

  ngOnInit() {
  }

}

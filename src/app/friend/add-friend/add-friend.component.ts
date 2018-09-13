import { Friend } from './../friend.model';
import { Component, OnInit, ViewChild, ElementRef,
  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {

  // Variabel objek baru inherence dari class Friend yang dari modul friend.modul.ts
  inputInfo: Friend = new Friend ('', '', '', '');
  @ViewChild('inputContact') inputContact: ElementRef;
  @ViewChild('inputAddress') inputAddress: ElementRef;

  @Output() friendAdded = new EventEmitter<Friend>();

  constructor() { }

  onAddFriend(inputEmail: HTMLInputElement) {
    console.log('Add Friend');
    console.log(this.inputInfo);
    console.log('Email : ' + inputEmail.value);
    console.log('Contact : ' + (this.inputContact.nativeElement.value));
    this.friendAdded.emit(new Friend(
      this.inputInfo.name,
      inputEmail.value,
      this.inputAddress.nativeElement.value,
      this.inputContact.nativeElement.value
    ));
  }

  ngOnInit() {
  }

}

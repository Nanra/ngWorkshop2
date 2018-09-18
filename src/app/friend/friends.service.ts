import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Friend } from './friend.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  friendAdded = new EventEmitter<void>();

  private friendList: Friend[] = [];

  constructor( private http: HttpClient) { }

  loadFriends() {
    return this.http.get('http://localhost:3000/api/friends', {observe: 'response'});
    // .subscribe((response: Response) => {
    //   let data = response.json();
    //   this.friendList.push(data);
    //   return data;
    // },
    // (error) => console.log(error)
    // );
  }

  addFriend(newFriendInfo) {
    // this.friendList.push(newFriendInfo);
    // this.friendAdded.emit();
    console.log('Friend List Awal');
    console.log(this.friendList);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post('http://localhost:3000/api/friends', {info: newFriendInfo}, {headers: headers}).subscribe((
      response: any) => {
        const data = response;
        this.friendList.push(data);
        this.friendAdded.emit();
        console.log('Response Beken');
        console.log(data);

      },
      (error) => console.log(error)
    );
  }


  getFriends() {
    return this.friendList.slice();
  }



}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Friend } from './friend.model';
import { Injectable, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable()
export class FriendsService {
  friendAdded = new EventEmitter<void>();

  // private friendList: Friend[] = [
  //   new Friend('Alfath Rajaya', 'alfath@email.com', 'Medan', '087265342')
  // ];
  private friendList: Friend[] = [];

  constructor(private _http: HttpClient) { }

  loadFriends() {
    return this._http.get(`http://localhost:3000/api/friends`, { observe: 'response' }).pipe(map((response: any) => {
      console.log('List : ');
      console.log(response);
      const data = response.body;
      this.friendList = data;
      return data;
    }, error => {
      console.log(error);
    }));
  }

  addFriend(newFriendInfo) {
    // this.friendList.push(newFriendInfo);
    // this.friendAdded.emit();
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this._http.post(`http://localhost:3000/api/friends`, {info: newFriendInfo}, {observe: 'response', headers: headers}).subscribe((response: any) => {
      console.log('masuk add :');
      console.log(response.body);
      const data = response.body;
      this.friendList.push(newFriendInfo);
      this.friendAdded.emit();
    }, error => {
      console.log(error);

    });
  }

  getFriends() {
    return this.friendList.slice();
  }



}

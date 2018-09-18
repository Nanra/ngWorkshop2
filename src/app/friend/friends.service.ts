import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Friend } from './friend.model';
import { Injectable, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable()
export class FriendsService {
  friendAdded = new EventEmitter<void>();

<<<<<<< HEAD
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
=======
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
>>>>>>> 81f3382d923a72cd59311e4df70cb2cd40a498d8
  }

  addFriend(newFriendInfo) {
    // this.friendList.push(newFriendInfo);
    // this.friendAdded.emit();
<<<<<<< HEAD
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
=======
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
>>>>>>> 81f3382d923a72cd59311e4df70cb2cd40a498d8
  }


  getFriends() {
    return this.friendList.slice();
  }



}

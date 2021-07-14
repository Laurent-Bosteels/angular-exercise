import { Component, OnInit } from '@angular/core';
import { Friend } from './friend'
import { AddFriendService } from './add-friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title = 'angular-intro';
  favoriteLanguage = ["Html", "Css", "Js", "Php", "Other"];
  friendModel = new Friend();
  allFriends : any;

  constructor (private addFriendService : AddFriendService) {}

  ngOnInit() {
    this.getAllFriends(this.addFriendService.url)
  }

  onSubmit() {
    this.addFriendService.addFriend(this.friendModel)
    .subscribe (
      data => console.log ('Succes', data),
      error => console.log ('Error', error)
    )
    this.getAllFriends(this.addFriendService.url);
  }

  public async getAllFriends (url : string) : Promise <any> {
      return await fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      }).then(response => {
          return response.json();
      }).then(data => (this.allFriends = data));
  }

  }

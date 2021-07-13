import { Component } from '@angular/core';
import { Friend } from './friend'
import { AddFriendService } from './add-friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'angular-intro';
  favoriteLanguage = ["Html", "Css", "Js", "Php", "Other"];
  friendModel = new Friend("","","","","");

  constructor (private addFriendService : AddFriendService) {}

  onSubmit() {
    this.addFriendService.addFriend(this.friendModel)
    .subscribe (
      data => console.log ('Succes', data),
      error => console.log ('Error', error)
    )
  }

}

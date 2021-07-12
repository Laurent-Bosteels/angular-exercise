import { Component } from '@angular/core';
import { Friend } from './friend'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-intro';
  favoriteLanguage = ["Html", "Css", "Js", "Php", "Other"];
  friendModel = new Friend("","","","","")

}

import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-percy-integration';

  @Output() buttonClick = new EventEmitter();

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	app =  AppComponent;
	static readonly ncol:number = 10
	static readonly noff:number = (12-AppComponent.ncol)/2
}

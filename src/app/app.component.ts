import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	readonly ncol:number = 10
	readonly noff:number = (12-this.ncol)/2
}

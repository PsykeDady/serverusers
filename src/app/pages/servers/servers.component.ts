import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
	constructor(private router : Router){}
	readonly ncol:number= AppComponent.ncol/2;

	updateServer () : void {

		this.router.navigate(["/"]);
	}
}

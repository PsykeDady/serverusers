import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ServerService } from 'src/app/services/Servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
	constructor(public serverService:ServerService,private router:Router, activatedRouter : ActivatedRoute){}
	readonly ncol:number= AppComponent.ncol/2;

	goTo(serverName:string){
		this.router.navigate(["/servers",serverName])
	}

	sizeNCol(componente:any){
		componente.ncol=this.ncol
	}
}

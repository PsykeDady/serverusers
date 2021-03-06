import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ServerModel } from 'src/app/models/ServerModel';
import { ServerService } from 'src/app/services/Servers.service';

@Component({
  selector: 'app-serverd',
  templateUrl: './serverd.component.html',
  styleUrls: ['./serverd.component.css']
})
export class ServerdComponent implements OnInit {

	@Input() ncol: number; 
	server:ServerModel;
	edit:boolean=true;
	serverName:string=""

	constructor(private router : Router, activatedRouter: ActivatedRoute, private serverService:ServerService) {
		activatedRouter.data.subscribe( data => {
			this.server=data["server"]
			this.serverName=this.server.name;
			if ( this.server===ServerModel.NO_SERVER)
			 	this.edit=false;
		});
	}

	ngOnInit(): void {
		this.ncol=this.ncol==undefined? AppComponent.ncol : this.ncol;
	}

	updateServer () : void {
		if(this.edit){
			this.serverService.flagOnline(this.serverName)
			this.server.online=!this.server.online
		}
	}
}

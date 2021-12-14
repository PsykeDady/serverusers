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
		activatedRouter.params.subscribe(
			params=> {
				this.server=undefined;
				let name=params["name"]
				if( name===undefined || name===""){
					this.server=ServerModel.NO_SERVER
					this.edit=false;
				} else {
					for ( let s of serverService.servers){
						if(s.name.toLocaleLowerCase()===name.toLocaleLowerCase()){
							this.server=s;
							break;
						}
					}
					if(this.server===undefined){
						router.navigate(["/eniente"])
						return;
					}
					this.serverName=this.server.name;
				}
			}
		);
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

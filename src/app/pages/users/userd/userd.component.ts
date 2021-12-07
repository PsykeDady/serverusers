import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/User';
import { TabsService } from 'src/app/services/Tabs.service';
import { UserService } from 'src/app/services/User.service';

@Component({
  selector: 'app-userd',
  templateUrl: './userd.component.html',
  styleUrls: ['./userd.component.css']
})
export class UserdComponent  {

	@Input() ncol:number;
	user:User;
	constructor(private tabservice:TabsService, private userService:UserService, private activatedRouter: ActivatedRoute, private router:Router){
		activatedRouter.params.subscribe(
			(param) => {
				let id: number= param["id"];
				if(id===undefined){
					this.user=User.NOUSER;
				} else {
					for ( let u of userService.users){
						if(u.id==id){
							this.user=u;
							break;
						}
					}
				}
			}
		)
		if (this.ncol===undefined){
			this.ncol=AppComponent.ncol;
		}
	}


	nextUser(){
		this.router.navigate(["/users",this.userService.nextUser(this.user)]);
	}
	
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/User.service';

@Component({
  selector: 'app-userd',
  templateUrl: './userd.component.html',
  styleUrls: ['./userd.component.css']
})
export class UserdComponent implements OnInit {

	@Input() ncol:number;
	@Input() user:User;
	editMode:boolean;
	constructor( private userService:UserService, private activatedRouter: ActivatedRoute, private router:Router){
		activatedRouter.queryParams.subscribe(params=>{
			console.log(params)
			let paramEdit=params["edit"]; 
			this.editMode=paramEdit==='' || paramEdit===1 || paramEdit==='true' || paramEdit===true ;
			console.log(this.editMode)
		})
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

		ngOnInit(){
			this.user=this.user==null?User.NOUSER:this.user;
		}


	nextUser(){
		this.router.navigate(["/users",this.userService.nextUser(this.user)]);
	}
	
	sEditMode(){
		console.log("this.editMode",this.editMode)
		this.router.navigate([],{
			relativeTo:this.activatedRouter,
			queryParamsHandling:'merge',
			queryParams:{edit:!this.editMode},
		})
	}

	change(uid: number) {
		this.userService.changeName(this.user.id,this.user.username)
		this.router.navigate(["/users"])
	}
}

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
	newName: string; 
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
				for ( let u of userService.users){
					if(u.id==id){
						this.user=u;
						break;
					}
				}
				console.log(this.user);
				this.newName=this.user.username
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
	
	sEditMode(edited?:boolean){
		if(edited){
			this.editMode=false;
			this.router.navigate([],{
				relativeTo:this.activatedRouter,
				queryParamsHandling:'merge',
				queryParams:{edit:this.editMode},
			})
		} else {
			this.router.navigate(["/users",this.user.id],{
				queryParamsHandling:'merge',
				queryParams:{edit:!this.editMode},
			})
		}
	}

	change() {
		this.userService.changeName(this.user.id,this.newName)
		this.user.username=this.newName;
		this.sEditMode(true);
	}

	edited() : boolean {
		return this.editMode && this.newName!==this.user.username;
	}

	widthView(div:number):string {
		let ncol=Math.floor(this.ncol/div);
		return `col-xs-${ncol} col-sm-${ncol} col-md-${ncol} col-lg-${ncol}`
	}
}

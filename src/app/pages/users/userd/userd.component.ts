import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/User';
import { UsersResolver } from 'src/app/resolvers/Users.resolver';
import { UserService } from 'src/app/services/User.service';

@Component({
  selector: 'app-userd',
  templateUrl: './userd.component.html',
  styleUrls: ['./userd.component.css']
})
export class UserdComponent implements OnInit {

	@Input() ncol:number;
	@Input() user:User;
	edited:boolean;
	editMode:boolean;
	newName: string; 
	constructor( private userService:UserService, private activatedRouter: ActivatedRoute, private router:Router){
		
		activatedRouter.data.subscribe(d=>{
			this.user=d["user"];
		})
		
		this.newName=this.user.username

		activatedRouter.queryParams.subscribe(params=>{
			let paramEdit=params["edit"]; 
			this.newName=this.user.username
			this.editMode=paramEdit==='' || paramEdit===1 || paramEdit==='true' || paramEdit===true ;
		})
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
	
	sEditMode():void{
		if(!this.editMode){
			this.newName=this.user.username
		}else {
			if(! this.confirmExit()) return;
		}
		this.router.navigate(["/users",this.user.id],{
			queryParamsHandling:'merge',
			queryParams:{edit:!this.editMode},
		})
	}

	confirmExit():boolean{
		if(this.edited){
			return confirm("Non hai salvato D: \nSe chiudi perderai i tuoi dati!!");
		}
		return true;
	}

	change() {
		this.userService.changeName(this.user.id,this.newName)
		this.edited=false
		this.user.username= this.newName
		this.sEditMode();
	}

	setEdited(event: Event) :void {
		let ievent:InputEvent=event as InputEvent
		//console.log("event",event)
		//console.log("ievent.data",ievent.data)
		let etarget:EventTarget=ievent.target;
		let hielement:HTMLInputElement= etarget as HTMLInputElement;
		//console.log("hielement.value",hielement.value)

		//console.log("setEdited")
		this.edited=hielement.value!==this.user.username
		//console.log("edited?",this.edited)
	}


	widthView(div:number):string {
		let ncol=Math.floor(this.ncol/div);
		return `col-xs-${ncol} col-sm-${ncol} col-md-${ncol} col-lg-${ncol}`
	}
}

import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ServerModel } from "src/app/models/ServerModel";
import { ServerService } from "src/app/services/Servers.service";
import { UserService } from "src/app/services/User.service";

@Component({
	selector:"app-register",
	templateUrl:"register.component.html",
	styleUrls:["register.component.css"]
})
export class RegisterComponent implements OnInit {

	@ViewChild("formRegistrazione") formRegistrazione:NgForm;

	constructor(public router:Router, public userService: UserService, public serverService: ServerService){}

	ngOnInit(): void {
		console.log(this.formRegistrazione)
	}

	stampe(){
		console.log("NgForm=",this.formRegistrazione);
		console.log("NgForm.valid=",this.formRegistrazione.valid);
		console.log("NgForm.value=",this.formRegistrazione.value);
		console.log("NgForm.value[\"nome\"]=",this.formRegistrazione.value["nome"]);
	}

	registrati(){
		this.stampe()
		let tipoAggiunta=this.formRegistrazione.value["tipoAggiunta"]; 

		if (tipoAggiunta=="user"){
			this.userService.addUsers(this.formRegistrazione.value["nome"])

			this.router.navigate(["/users"])
		} else {
			this.serverService.push(new ServerModel(this.formRegistrazione.value["nome"],false))


			this.router.navigate(["/servers"])
		}
		
	}
}
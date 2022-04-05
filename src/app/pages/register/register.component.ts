import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { TabsService } from "src/app/services/Tabs.service";
import { UserService } from "src/app/services/User.service";

@Component({
	selector:"app-register",
	templateUrl:"register.component.html",
	styleUrls:["register.component.css"]
})
export class RegisterComponent {

	constructor(public router:Router, public userService: UserService){

	}


	registrati(formRegistrazione:NgForm){
		console.log("NgForm=",formRegistrazione);
		console.log("NgForm.value=",formRegistrazione.value);
		console.log("NgForm.value[\"nome\"]=",formRegistrazione.value["nome"]);
		
		this.userService.addUsers(formRegistrazione.value["nome"])

		this.router.navigate(["/users"])
	}
}
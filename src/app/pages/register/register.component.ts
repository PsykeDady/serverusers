import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/User.service";

@Component({
	selector:"app-register",
	templateUrl:"register.component.html",
	styleUrls:["register.component.css"]
})
export class RegisterComponent {

	@ViewChild("formRegistrazione") formRegistrazione:NgForm;

	constructor(public router:Router, public userService: UserService){
	}

	stampe(){
		console.log("NgForm=",this.formRegistrazione);
		console.log("NgForm.valid=",this.formRegistrazione.valid);
		console.log("NgForm.value=",this.formRegistrazione.value);
		console.log("NgForm.value[\"nome\"]=",this.formRegistrazione.value["nome"]);
	}

	registrati(){
		this.stampe()
		
		this.userService.addUsers(this.formRegistrazione.value["nome"])

		this.router.navigate(["/users"])
	}
}
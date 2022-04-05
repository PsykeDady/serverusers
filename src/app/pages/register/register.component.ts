import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
	selector:"app-register",
	templateUrl:"register.component.html",
	styleUrls:["register.component.css"]
})
export class RegisterComponent {
	registrati(formRegistrazione:NgForm){
		console.log("NgForm=",formRegistrazione);
		console.log("NgForm.value=",formRegistrazione.value);
		console.log("NgForm.value[\"nome\"]=",formRegistrazione.value["nome"]);
	}
}
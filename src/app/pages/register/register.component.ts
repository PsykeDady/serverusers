import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";
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

	tipiDiRegistrazione:string[]=["user","server"]
	registrazioneForm: FormGroup;

	ngOnInit(): void {
		this.registrazioneForm = new FormGroup({
			'nome':new FormControl(null),
			'tipo':new FormControl(null)
		})
	}

	submitta(){
		console.log(this.registrazioneForm.value)
	}

}
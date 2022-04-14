import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, NgForm, NgModelGroup, Validators } from "@angular/forms";
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

	constructor(private userService:UserService, private serverService: ServerService, private router:Router) {}

	tipiDiRegistrazione:string[]=["user","server"]
	nomeForm: FormGroup;

	ngOnInit(): void {
		this.nomeForm = new FormGroup({
			"anagrafica": new FormGroup({
				'nome':new FormControl(null, Validators.required),
				'email':new FormControl(null, [Validators.required, Validators.email]),
			}),
			'tipo':new FormControl(null, Validators.required)
		})
	}

	submitta(){
		console.log(this.nomeForm.value["anagrafica"]["nome"])
		console.log(this.nomeForm.get(['anagrafica','nome']))
		console.log(this.nomeForm.get('tipo'))
		console.log(this.nomeForm.value)

		if(this.nomeForm.value['tipo']=="server"){
			this.serverService.push(new ServerModel(this.nomeForm.value["anagrafica"]["nome"],false))
			this.router.navigate(["/servers"])
		} else {
			this.userService.addUsers(this.nomeForm.value["anagrafica"]["nome"])
			this.router.navigate(["/users"])
		}
	}

}
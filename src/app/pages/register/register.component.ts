import { Component, OnInit, ViewChild } from "@angular/core";
import { FormArray, FormControl, FormGroup, NgForm, NgModelGroup, Validators } from "@angular/forms";
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
				'email':new FormControl(null, this.validaEmailSerio),
			}),
			'tipo':new FormControl(null, Validators.required),
			'listaSkill' : new FormArray([])
		})
	}

	submitta():void{
		console.log(this.nomeForm.value)

		if(this.nomeForm.invalid){
			alert("Wewe kki sta faciendu")
			return;
		}

		if(this.nomeForm.value['tipo']=="server"){
			this.serverService.push(new ServerModel(this.nomeForm.value["anagrafica"]["nome"],false))
			this.router.navigate(["/servers"])
		} else {
			this.userService.addUsers(this.nomeForm.value["anagrafica"]["nome"])
			this.router.navigate(["/users"])
		}
	}

	addSkill():void{
		console.log("this.nomeForm.get('listaSkill').valid",this.nomeForm.get("listaSkill").valid);
		console.log("this.nomeForm.get('listaSkill').value",this.nomeForm.get("listaSkill").value);
		console.log("(this.nomeForm.get('listaSkill') as FormArray).controls",(this.nomeForm.get("listaSkill") as FormArray).controls);
		if(this.nomeForm.get("listaSkill").invalid){
			return;
		}
		(this.nomeForm.get("listaSkill") as FormArray).push(new FormControl(null,Validators.required));
		console.log("this.nomeForm.get('listaSkill').value fine",this.nomeForm.get("listaSkill").value);
	}

	getFormArray(){
		return this.nomeForm.get("listaSkill") as FormArray;
	}

	validaEmailSerio(formEmail:FormControl):{[s:string]:boolean}{

		let testo:string=formEmail.value;

		let verifica=  testo? testo.match(/[a-zA-Z0-9][a-zA-Z0-9_]*@([a-zA-Z0-9][a-zA-Z0-9_]*\.)+(com|it|info|pizza|org)/g) : null;

		console.log("verifica=",verifica)
		console.log("formEmail=",formEmail)

		return verifica?null:{'l\'email non è valida':true, 'altromessaggio':false};
	}
}
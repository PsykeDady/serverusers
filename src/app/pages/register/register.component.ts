import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
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
	dominiValidi:string=["com","it","info","pizza","org"].reduce((pv,cv)=>{return `${pv}|${cv}`;})

	ngOnInit(): void {
		this.nomeForm = new FormGroup({
			"anagrafica": new FormGroup({
				'nome':new FormControl(null, Validators.required),
				'email':new FormControl(null, null, this.validaEmailAsincrono.bind(this)),
			}),
			'tipo':new FormControl(null, Validators.required),
			'listaSkill' : new FormArray([])
		})

		this.nomeForm.get(["anagrafica","email"]).statusChanges.subscribe(nuovoStato=>{
			console.log(nuovoStato)
		})

		this.nomeForm.get(["anagrafica","email"]).valueChanges.subscribe(nuovoValore=>{
			console.log(nuovoValore)
		})

		this.nomeForm.get(["anagrafica","email"]).setValue("@.")
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
		console.log("this.dominiValidi=",this.dominiValidi);
		let regexText:string = `([a-zA-Z0-9]\\w*)@([a-zA-Z0-9]\\w*\\.)+(${this.dominiValidi})`;
		console.log("regexText=",regexText);
		let regex:RegExp= new RegExp(regexText,"g")

		let verifica = testo? testo.match(regex) : null;

		console.log("verifica=",verifica)
		console.log("testo=",testo)
		console.log("formEmail=",formEmail)

		return verifica?null:{'EmailInvalida':testo?true:false, 'EmailVuota':testo?false:true};
	}

	validaEmailAsincrono(formEmail:FormControl):Promise<any>|Observable<any>{

		// return new Promise<any>((resolve) => {
		// 	let testo:string=formEmail.value;
		// 	console.log("this.dominiValidi=",this.dominiValidi);
		// 	let regexText:string = `([a-zA-Z0-9]\\w*)@([a-zA-Z0-9]\\w*\\.)+(${this.dominiValidi})`;
		// 	console.log("regexText=",regexText);
		// 	let regex:RegExp= new RegExp(regexText,"g")

		// 	let verifica = testo? testo.match(regex) : null;

		// 	console.log("verifica=",verifica)
		// 	console.log("testo=",testo)
		// 	console.log("formEmail=",formEmail)

		// 	resolve(verifica?null:{'EmailInvalida':testo?true:false, 'EmailVuota':testo?false:true});
			
		// });
		// return new Observable<any>((subscriber) => {
		// 	let testo:string=formEmail.value;
		// 	console.log("this.dominiValidi=",this.dominiValidi);
		// 	let regexText:string = `([a-zA-Z0-9]\\w*)@([a-zA-Z0-9]\\w*\\.)+(${this.dominiValidi})`;
		// 	console.log("regexText=",regexText);
		// 	let regex:RegExp= new RegExp(regexText,"g")

		// 	let verifica = testo? testo.match(regex) : null;

		// 	console.log("verifica=",verifica)
		// 	console.log("testo=",testo)
		// 	console.log("formEmail=",formEmail)

		// 	subscriber.next(verifica?null:{'EmailInvalida':testo?true:false, 'EmailVuota':testo?false:true});
		// 	subscriber.complete();
			
		// });
		return new Promise<any>((resolve) => {
			setTimeout(()=> {
				let testo:string=formEmail.value;
				console.log("this.dominiValidi=",this.dominiValidi);
				let regexText:string = `([a-zA-Z0-9]\\w*)@([a-zA-Z0-9]\\w*\\.)+(${this.dominiValidi})`;
				console.log("regexText=",regexText);
				let regex:RegExp= new RegExp(regexText,"g")
			
				let verifica = testo? testo.match(regex) : null;
			
				console.log("verifica=",verifica)
				console.log("testo=",testo)
				console.log("formEmail=",formEmail)
			
				resolve(verifica?null:{'EmailInvalida':testo?true:false, 'EmailVuota':testo?false:true});
			}, 2500)		
		});
	}

	
}
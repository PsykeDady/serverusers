import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {map} from 'rxjs/operators';
import { getContatore } from 'src/app/Observable/Contatore';
import { TabsService } from 'src/app/services/Tabs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

	secondi: string=""; 
	minuti: string="";
	ore: string="";
	completion:boolean=false;
	contatore:Subscription;
	
	constructor(private tabservice:TabsService){}

	ngOnInit(): void {
		this.contatore = getContatore(12,2,1).pipe(map(v=>{
			return {secondi:this.format(v.secondi,2),minuti:this.format(v.minuti,2),ore:this.format(v.ore,2)}
		})).subscribe(({secondi,minuti,ore}) => {
			this.secondi=secondi;
			this.minuti=minuti;
			this.ore=ore;
		},
			error => {console.log("error",error)}, 
			/*complete*/()=> {
				this.completion=true;
		} );
	}

	showClock():boolean{
		return this.ore!='' && this.minuti!='' && this.secondi!='';
	}

	ngOnDestroy(): void {
		this.contatore.unsubscribe();
	}

	format(numero:number, cifre:number):string{
		let risultato:string=""
		let lunghezza:number=(""+numero).length;
		let disavanzo=cifre-lunghezza;
		while(disavanzo>0){
			risultato=risultato+'0';
			disavanzo--;
		}
		return risultato+numero;
	}
}

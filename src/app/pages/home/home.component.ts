import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { getContatore } from 'src/app/Observable/Contatore';
import { TabsService } from 'src/app/services/Tabs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

	secondi: number=0; 
	minuti: number=0;
	ore: number=0;
	contatore:Subscription;
	
	constructor(private tabservice:TabsService){}

	ngOnInit(): void {
		this.contatore = getContatore().subscribe(secondi => {
			this.secondi=secondi%60;
			this.minuti=(Math.floor(secondi/60)%60);
			this.ore=Math.floor(secondi/3600);
			console.log(secondi)
		});
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

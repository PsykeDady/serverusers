import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
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
		this.contatore=interval(1000).subscribe(tick=>{
			let tick1=tick+1;
			this.secondi=tick1%60;
			this.minuti=(Math.floor(tick1/60)%60);
			this.ore=Math.floor(tick1/3600);
			console.log(tick)
		})
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

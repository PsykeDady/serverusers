import { Component, OnInit } from '@angular/core';
import { Tab } from '../models/Tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

	tabs:Tab[]= [
		new Tab("Home","#",true),
		new Tab("Servers","#"),
		new Tab("Users","#")
	]

	attiva(indice:number){
		for (let ind in this.tabs){
			let i = parseInt(ind);
			this.tabs[i].active=i===indice;
		}
	}
}

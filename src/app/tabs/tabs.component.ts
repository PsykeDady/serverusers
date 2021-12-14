import { Component } from '@angular/core';
import { TabsEnum } from '../models/Tabs.enum';
import { TabsService } from '../services/Tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

	tabs = TabsService;
	tabm= TabsEnum;
	constructor(private tabservice: TabsService){}


}

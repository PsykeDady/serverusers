import { Component } from '@angular/core';
import { Tab } from '../models/Tab';
import { TabsService } from '../services/Tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

	tabs = TabsService;
	constructor(private tabservice: TabsService){}

}

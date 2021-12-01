import { Component } from '@angular/core';
import { TabsService } from 'src/app/services/Tabs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
	
	constructor(private tabservice:TabsService){}
}

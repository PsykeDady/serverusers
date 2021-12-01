import { AfterContentInit, Component, OnInit } from '@angular/core';
import { TabsEnum } from 'src/app/models/Tabs.enum';
import { TabsService } from 'src/app/services/Tabs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
	ngOnInit () {
		TabsService.attivaFE(TabsEnum.Home);
	}

	constructor(private tabservice:TabsService){}


}

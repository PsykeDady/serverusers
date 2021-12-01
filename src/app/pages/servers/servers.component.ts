import { AfterContentInit, Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TabsEnum } from 'src/app/models/Tabs.enum';
import { TabsService } from 'src/app/services/Tabs.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

	ngOnInit () {
		TabsService.attivaFE(TabsEnum.Servers);
	}

	constructor(private tabservice:TabsService){}

	readonly ncol:number= AppComponent.ncol/2;
	

}

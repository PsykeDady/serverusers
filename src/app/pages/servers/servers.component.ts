import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TabsService } from 'src/app/services/Tabs.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
	constructor(private tabservice:TabsService){}
	readonly ncol:number= AppComponent.ncol/2;
}

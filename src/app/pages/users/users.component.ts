import { AfterContentInit, Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TabsEnum } from 'src/app/models/Tabs.enum';
import { TabsService } from 'src/app/services/Tabs.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	ngOnInit () {
		TabsService.attivaFE(TabsEnum.Users);
	}

	constructor(private tabservice:TabsService){}

	readonly ncol :number = AppComponent.ncol/2;
 
}

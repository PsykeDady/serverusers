import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TabsService } from 'src/app/services/Tabs.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
	constructor(private tabservice:TabsService){}
	readonly ncol :number = AppComponent.ncol/2;
}

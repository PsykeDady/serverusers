import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/User';
import { TabsService } from 'src/app/services/Tabs.service';
import { UserService } from 'src/app/services/User.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
	constructor(private tabservice:TabsService, public userService:UserService){}
	readonly ncol :number = AppComponent.ncol/2;
	user_sel: User;

	userSel(user:User) {
		this.user_sel=user;
	}
}

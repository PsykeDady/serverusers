import {  Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { UserService } from '../services/User.service';

@Injectable()
export class UsersResolver implements Resolve<User> {
	constructor(private router:Router, private userService:UserService ){	
	}
	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): User | Observable<User> | Promise<User> {
		let user:User;
		let id= route.params["id"];
		for ( let u of this.userService.users){
			if(u.id==id){
				user=u;
				break;
			}
		}
		return user;
	}
}

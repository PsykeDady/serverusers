import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { UserService } from "./User.service";

@Injectable()
export class UserActivationService implements CanActivateChild{

	constructor(private router:Router, private userservice:UserService){}

	canActivateChild(activatedRouteSnapshot:ActivatedRouteSnapshot,routerStateSnapshot: RouterStateSnapshot):boolean | UrlTree | Observable <boolean | UrlTree> | Promise<boolean | UrlTree> {
		console.log(activatedRouteSnapshot)
		console.log(routerStateSnapshot)
		let id = activatedRouteSnapshot.params["id"]

		for ( let u of this.userservice.users){
			if(u.id==id){
				return true;
			}
		}
		
		return this.router.navigate(["/eniente"])
	}
}
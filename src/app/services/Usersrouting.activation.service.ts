import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { UserdComponent } from "../pages/users/userd/userd.component";
import { UserService } from "./User.service";

@Injectable()
export class UserActivationService implements CanActivateChild, CanDeactivate<UserdComponent>{

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

	canDeactivate(
		component: UserdComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState: RouterStateSnapshot
	): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
		
		if(component.editMode){
			return confirm("Non hai salvato D: \nSe chiudi perderai i tuoi dati!!");
		}

		return true;
	}
		  
}
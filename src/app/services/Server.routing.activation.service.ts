import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { ServerService } from "./Servers.service";

@Injectable()
export class ServerRoutingActivation implements CanActivateChild{

	constructor(private router:Router, private serverService:ServerService){}

	canActivateChild(activatedRouteSnapshot:ActivatedRouteSnapshot,routerStateSnapshot: RouterStateSnapshot):boolean | UrlTree | Observable <boolean | UrlTree> | Promise<boolean | UrlTree> {
		console.log(activatedRouteSnapshot)
		console.log(routerStateSnapshot)
		let name = activatedRouteSnapshot.params["name"]

		for ( let s of this.serverService.servers){
				if(s.name.toLocaleLowerCase()===name.toLocaleLowerCase()){
					return s.name===name? true : this.router.navigate(["/servers",s.name])
			}
		}
		
		return this.router.navigate(["/eniente"])
	}
}
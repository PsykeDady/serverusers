import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { ServerService } from "./Servers.service";

@Injectable()
export class ServerRoutingActivation implements CanActivate{

	constructor(private router:Router, private serverService:ServerService){}

	canActivate(activatedRouteSnapshot:ActivatedRouteSnapshot,routerStateSnapshot: RouterStateSnapshot):boolean | UrlTree | Observable <boolean | UrlTree> | Promise<boolean | UrlTree> {
		console.log(activatedRouteSnapshot)
		console.log(routerStateSnapshot)
		let name = activatedRouteSnapshot.params["name"]
		if( name===undefined || name===""){
			return routerStateSnapshot.url==="/servers"? true :this.router.navigate(["/eniente"]) ;
		} else {
			for ( let s of this.serverService.servers){
				if(s.name.toLocaleLowerCase()===name.toLocaleLowerCase()){
					return this.router.navigate(["/servers",s.name])
				}
			}
		}
		return this.router.navigate(["/eniente"])
	}
}
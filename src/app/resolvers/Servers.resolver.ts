import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServerModel } from "../models/ServerModel";
import { ServerService } from "../services/Servers.service";

@Injectable()
export class ServerResolver implements Resolve<ServerModel> {
	constructor(private serverService: ServerService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ServerModel | Observable<ServerModel> | Promise<ServerModel> {
		let name= route.params["name"];
		if( name===undefined || name===""){
			return ServerModel.NO_SERVER;
		}

		for ( let s of this.serverService.servers){
			if(s.name===name){
				return s;
			}
		}
	}
}
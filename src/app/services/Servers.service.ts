import { ServerModel } from "../models/ServerModel";

export class ServerService {
	
	private _servers:ServerModel[] = [
		new ServerModel("Production"),
		new ServerModel("TestServer",true),
		new ServerModel("DevServer")
	]

	public get servers () {
		return this._servers.map(v=> {return new ServerModel(v.name,v.online);})
	}

	push( s: ServerModel):boolean {
		this._servers.forEach(v=>{if(s.name.toLocaleLowerCase()===v.name.toLocaleLowerCase()) return false;})
		this._servers.push(s);
		return true;
	}

	setStatus(s:ServerModel):void{
		this._servers.forEach( v => {
			if(s.name.toLocaleLowerCase()===v.name.toLocaleLowerCase()) v.online=s.online;
		})
	}

	flagOnline(name:string):void{
		this._servers.forEach( v => {
			if(name.toLocaleLowerCase()===v.name.toLocaleLowerCase()) v.online=!v.online;
		})
	}
}
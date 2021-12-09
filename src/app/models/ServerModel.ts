export class ServerModel {

	private ronly_property:boolean = false;
	public static readonly NO_SERVER: ServerModel = new ServerModel ("", false);

	static initialization() {
		this.NO_SERVER.ronly_property=true;
	}

	constructor(private _name:string, private _online?:boolean) {
		
	}

	public set online (online:boolean)  {
		if(this.ronly_property) {
			throw new Error("this server is not editable")	
		} else { 
			this._online= online; 
		}
	}

	public get online () {
		return this._online;
	}

	public get name () {
		return this._name;
	}
}

ServerModel.initialization();
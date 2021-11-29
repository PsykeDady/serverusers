export class Tab {
	private _active:boolean; 
	private _name:string; 
	private _link:string; 

	constructor(name:string, link:string,active?:boolean){
		this._name=name;
		this._link=link;
		this._active=active?true:false; //avoiding undefined assign 
	}

	get active () { return this._active;}
	get name () { return this._name;}
	get link () { return this._link;}

	set active ( active: boolean ){
		this._active=active;
	}
	
}
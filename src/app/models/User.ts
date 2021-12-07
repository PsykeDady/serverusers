export class User { 
	private static inc=1;

	public static NOUSER:User = new User ("NO USER SELECTED", -1);
	
	constructor(public username:string, public id?:number){
		if(id==undefined){
			this.id=User.inc++;
		}
	}
}
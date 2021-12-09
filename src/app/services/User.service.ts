import { User } from "../models/User";

export class UserService{
	_users:User[]=[
		new User("Max"),
		new User("Anna"),
		new User("Chris")
	]

	get users(){
		return this._users.map(v=> new User(v.username,v.id));
	}


	nextUser(user:User ):number{
		for(let i :number=1; i<this.users.length;i++){
			if(user.id == this.users[i-1].id){
				return this.users[i].id;
			}
		}
		return 1;
	}

	changeName(uid:number, newName:string) :void{
		for( let user of this._users ){
			if(uid == user.id){
				user.username=newName;
			}
		}
	}
}
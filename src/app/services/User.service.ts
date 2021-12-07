import { User } from "../models/User";

export class UserService{
	users:User[]=[
		new User("Max"),
		new User("Anna"),
		new User("Chris")
	]


	nextUser(user:User ):number{
		for(let i :number=1; i<this.users.length;i++){
			if(user.id == this.users[i-1].id){
				return this.users[i].id;
			}
		}
		return 1;
	}
}
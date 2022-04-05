import { NgModule                 } from "@angular/core"                            ;
import { RouterModule    , Routes } from "@angular/router"                          ;
import { HomeComponent            } from "./pages/home/home.component"              ;
import { NotAuthorizated } from "./pages/notauthorizated/app.notauthorizated";
import { NotFoundPage             } from "./pages/notfound/app.notfound"            ;
import { RegisterComponent } from "./pages/register/register.component";
import { ServerdComponent         } from "./pages/servers/serverd/serverd.component";
import { ServersComponent         } from "./pages/servers/servers.component"        ;
import { UserdComponent           } from "./pages/users/userd/userd.component"      ;
import { UsersComponent           } from "./pages/users/users.component"            ;
import { ServerResolver } from "./resolvers/Servers.resolver";
import { UsersResolver } from "./resolvers/Users.resolver";
import { ServerRoutingActivation } from "./services/Server.routing.activation.service";
import { UserActivationService } from "./services/Usersrouting.activation.service";

const appRoutes : Routes = [
	{path:""        ,component:HomeComponent },
	{path:"users"   ,component:UsersComponent, children: [
		{path:":id"     ,component:UserdComponent, canDeactivate:[UserActivationService], resolve:{user:UsersResolver}}
	], canActivateChild: [UserActivationService] }             ,
	{path:"servers" ,component:ServersComponent , children:[
		{path:":name"   ,component:ServerdComponent, resolve:{server:ServerResolver} }
	], canActivateChild: [ServerRoutingActivation] }      ,
	{path:"register", component : RegisterComponent},
	{path:"eniente" , component : NotFoundPage   },
	{path:"banana"  , component : NotAuthorizated},
	{path:"**"      , redirectTo:"/eniente"       }
]

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
}) 
export class RoutingModule {

}
import { NgModule                 } from "@angular/core"                            ;
import { RouterModule    , Routes } from "@angular/router"                          ;
import { HomeComponent            } from "./pages/home/home.component"              ;
import { NotFoundPage             } from "./pages/notfound/app.notfound"            ;
import { ServerdComponent         } from "./pages/servers/serverd/serverd.component";
import { ServersComponent         } from "./pages/servers/servers.component"        ;
import { UserdComponent           } from "./pages/users/userd/userd.component"      ;
import { UsersComponent           } from "./pages/users/users.component"            ;

const appRoutes : Routes = [
	{path:""        ,component:HomeComponent },
	{path:"users"   ,component:UsersComponent, children: [
		{path:":id"     ,component:UserdComponent }
	] }             ,
	{path:"servers" ,component:ServersComponent , children:[
		{path:":name"   ,component:ServerdComponent }
	]}              ,
	{path:"eniente" , component: NotFoundPage},
	{path:"**"      , redirectTo: "/eniente"}
]

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
}) 
export class RoutingModule {

}
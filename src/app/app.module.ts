import { NgModule                } from '@angular/core'                                ;
import { FormsModule             } from '@angular/forms'                               ;
import { BrowserModule           } from '@angular/platform-browser'                    ;
import { AppComponent            } from './app.component'                              ;
import { HomeComponent           } from './pages/home/home.component'                  ;
import { NotAuthorizated         } from './pages/notauthorizated/app.notauthorizated'  ;
import { NotFoundPage            } from './pages/notfound/app.notfound'                ;
import { RegisterComponent       } from './pages/register/register.component'          ;
import { ServerdComponent        } from './pages/servers/serverd/serverd.component'    ;
import { ServersComponent        } from './pages/servers/servers.component'            ;
import { UserdComponent          } from './pages/users/userd/userd.component'          ;
import { UsersComponent          } from './pages/users/users.component'                ;
import { ServerResolver          } from './resolvers/Servers.resolver'                 ;
import { UsersResolver           } from './resolvers/Users.resolver'                   ;
import { RoutingModule           } from './routing.module'                             ;
import { ServerRoutingActivation } from './services/Server.routing.activation.service' ;
import { ServerService           } from './services/Servers.service'                   ;
import { TabsService             } from './services/Tabs.service'                      ;
import { UserService             } from './services/User.service'                      ;
import { UserActivationService   } from './services/Usersrouting.activation.service'   ;
import { TabsComponent           } from './tabs/tabs.component'                        ;



@NgModule({
	declarations: [
		AppComponent,
		TabsComponent,
		HomeComponent,
		UsersComponent,
		ServersComponent,
		UserdComponent,
		ServerdComponent,
		NotFoundPage,
		NotAuthorizated,
		RegisterComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		RoutingModule
	],
	providers: [
		TabsService, 
		UserService,
		ServerService,
		ServerRoutingActivation,
		UserActivationService,
		UsersResolver, 
		ServerResolver
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

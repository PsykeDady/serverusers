import { NgModule                  } from '@angular/core'                             ;
import { BrowserModule             } from '@angular/platform-browser'                 ;
import { RouterModule     , Routes } from '@angular/router'                           ;
import { AppComponent              } from './app.component'                           ;
import { TabsComponent             } from './tabs/tabs.component'                     ;
import { HomeComponent             } from './pages/home/home.component'               ;
import { UsersComponent            } from './pages/users/users.component'             ;
import { UserdComponent            } from './pages/users/userd/userd.component'       ;
import { ServersComponent          } from './pages/servers/servers.component'         ;
import { TabsService               } from './services/Tabs.service'                   ;
import { UserService               } from './services/User.service'                   ;
import { ServerService             } from './services/Servers.service'                ;
import { ServerdComponent          } from './pages/servers/serverd/serverd.component' ;
import { FormsModule               } from '@angular/forms'                            ;
import { NotFoundPage              } from './pages/notfound/app.notfound'             ;

const appRoutes : Routes = [
	{path:""          ,component:HomeComponent    },
	{path:"users"     ,component:UsersComponent, children: [
		{path:":id" ,component:UserdComponent   },
	]   }, 
	{path:"servers"   ,component:ServersComponent , children:[
		{path:":name"   ,component:ServerdComponent },
	]},
	{path:"eniente", component: NotFoundPage},
	{path:"**", redirectTo: "eniente"}
]

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserdComponent,
    ServerdComponent,
	NotFoundPage
  ],
  imports: [
    BrowserModule,
	FormsModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [TabsService, UserService,ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundPage } from './pages/notfound/app.notfound';
import { ServerdComponent } from './pages/servers/serverd/serverd.component';
import { ServersComponent } from './pages/servers/servers.component';
import { UserdComponent } from './pages/users/userd/userd.component';
import { UsersComponent } from './pages/users/users.component';
import { RoutingModule } from './routing.module';
import { ServerService } from './services/Servers.service';
import { TabsService } from './services/Tabs.service';
import { UserService } from './services/User.service';
import { TabsComponent } from './tabs/tabs.component';



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
	RoutingModule
  ],
  providers: [TabsService, UserService,ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

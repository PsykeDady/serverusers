import { Component, OnDestroy, OnInit } from "@angular/core";
import { Tab } from "src/app/models/Tab";
import { TabsEnum } from "src/app/models/Tabs.enum";
import { TabsService } from "src/app/services/Tabs.service";

@Component({
	'selector':"not-found",
    'template':`
    	<h3>We we wajju, n'aggie trovat chiddu cchi va cercand</h3>
		<q><i>404: page not found</i></q>
		<img 
			src="./assets/img/italian-hand-italy.gif"
			class="img-responsive img-rounded"
		/>
    `
})
export class NotFoundPage implements OnInit, OnDestroy{

	ngOnInit(){
		TabsService.tabs.push(new Tab(TabsEnum["OOPS! D:"],"eniente"))
	}

	ngOnDestroy(){
		TabsService.tabs=TabsService.tabs.slice(0,TabsService.tabs.length-1)
	}
	
}
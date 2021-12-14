import { Component, OnDestroy, OnInit } from "@angular/core";
import { Tab } from "src/app/models/Tab";
import { TabsEnum } from "src/app/models/Tabs.enum";
import { TabsService } from "src/app/services/Tabs.service";

@Component({
	'selector':"not-auth",
    'template':`
    	<h3>'ndo cazz vai</h3>
		<p>Se la banana non ce l'hai</p>
		<q><i>401: not authorizated</i></q>
		<img 
			src="https://i.pinimg.com/originals/f3/0e/21/f30e21da146bd3501555eec943a8898e.gif"
			class="img-responsive img-rounded"
		/>
    `
})
export class NotAuthorizated implements OnInit, OnDestroy{
	
	ngOnInit(){
		TabsService.tabs.push(new Tab(TabsEnum["OOPS! D:"],"banana"))
	}

	ngOnDestroy(){
		TabsService.tabs=TabsService.tabs.slice(0,TabsService.tabs.length-1)
	}
	
}
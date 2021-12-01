import { Tab } from "../models/Tab";
import { TabsEnum } from "../models/Tabs.enum";

/**
 * This class is intended to keep in memory what tabs had to be active
 */
export class TabsService { 
	static readonly tabs:Tab[]= [
		new Tab(TabsEnum.Home,"",true),
		new Tab(TabsEnum.Servers,"servers"),
		new Tab(TabsEnum.Users,"users")
	]

	static attivaFE(tenum:TabsEnum|number) : void{
		let tabname=TabsEnum[tenum]
		console.log(tenum)
		for (let tab of TabsService.tabs){
			tab.active=tab.name===tabname;
		}
	}

	static attiva(indice:number) :void{
		for (let ind in TabsService.tabs){
			let i = parseInt(ind);
			TabsService.tabs[i].active=i===indice;
		}
	}

}
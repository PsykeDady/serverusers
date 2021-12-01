import { Tab } from "../models/Tab";
import { TabsEnum } from "../models/Tabs.enum";

/**
 * This class is intended to keep in memory what tabs had to be active
 */
export class TabsService { 
	static readonly tabs:Tab[]= [
		new Tab(TabsEnum.Home,""),
		new Tab(TabsEnum.Servers,"servers"),
		new Tab(TabsEnum.Users,"users")
	]

	

}
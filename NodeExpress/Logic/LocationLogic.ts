"use strict";
import dbFactory = require('../Database/ManagerFactory')

export class LocationLogic {
    private menuManager = dbFactory.CreateMenuManager();

    public GetMenus(locationid: number): Promise<Domain.Menu[]> {
        return this.menuManager.GetMenus(locationid);
    }

    public GetMenu(menuid: number): Domain.Menu {
        return null;
    }

    public AddOrUpdateMenu(locationid: number, menu: Domain.Menu) {

    }
}

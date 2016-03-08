"use strict";
import Manager = require('./Manager');
import mongodb = require('mongodb');

export class MenuManager extends Manager.Manager {
   
    public async GetMenus(locationid: number) {
        var menus = await this.db.collection('menus').find({}).toArray();
        return menus;
    }
}
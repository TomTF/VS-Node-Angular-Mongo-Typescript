/*
 * GET home page.
 */
import express = require('express');
import factory = require('../Logic/LogicFactory');

var locationLogic = factory.CreateLocationLogic();

export async function test(req: express.Request, res: express.Response) {
    var menus = await locationLogic.GetMenus(1);
    res.json(menus);
}

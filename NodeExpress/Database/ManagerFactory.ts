"use strict";
import menuManager = require('./MenuManager');

export function CreateMenuManager() {
    return new menuManager.MenuManager();
}

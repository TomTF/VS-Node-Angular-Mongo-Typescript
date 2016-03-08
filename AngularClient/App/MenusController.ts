"use strict";

class MenusController {
    public menus: any[] = [];

    static $inject = ["$http"];
    constructor($http: ng.IHttpService) {
        $http.get<any[]>("test").success(menus => {
            this.menus = menus;
        });
    }
}
"use strict";

angular.module("myapp", ["ngRoute"])
    .controller("MenusController", MenusController)
    // The routes for the SPA
    .config(($routeProvider: ng.route.IRouteProvider) => {
        $routeProvider
            .when("/", {
                templateUrl: "App/menus.html", controller: "MenusController", controllerAs: "controller"
            });
    });
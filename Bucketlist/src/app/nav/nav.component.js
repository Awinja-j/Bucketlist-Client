"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var authentication_service_1 = require("../services/authentication.service");
var alert_service_1 = require("../services/alert.service");
var data_service_1 = require("../services/data.service");
var router_1 = require("@angular/router");
var NavBar = (function () {
    function NavBar(_dataservice, alertservice, authservice, router) {
        this._dataservice = _dataservice;
        this.alertservice = alertservice;
        this.authservice = authservice;
        this.router = router;
    }
    NavBar.prototype.home = function () {
        this.router.navigate(['/']);
    };
    NavBar.prototype.logout = function () {
        this.authservice.logout();
        this.router.navigate(['/']);
    };
    NavBar.prototype.bucketlist = function () {
        this.router.navigate(['/bucketlist']);
    };
    return NavBar;
}());
NavBar = __decorate([
    core_1.Component({
        selector: 'nav-app',
        templateUrl: './nav.component.html',
        styleUrls: ['./nav.component.css']
    }),
    __metadata("design:paramtypes", [data_service_1.dataService,
        alert_service_1.AlertService,
        authentication_service_1.AuthenticationService,
        router_1.Router])
], NavBar);
exports.NavBar = NavBar;
//# sourceMappingURL=nav.component.js.map
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
var http_1 = require("@angular/http");
var app_config_1 = require("../app.config");
require("rxjs/add/operator/map");
var dataService = (function () {
    function dataService(http, config) {
        this.http = http;
        this.config = config;
        this._url = this.config.ApiUrl;
    }
    dataService.prototype.header = function () {
        // create authorization header with Authorization
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log('this is ', currentUser);
        if (currentUser && currentUser.Authorization) {
            var headers = new http_1.Headers();
            headers.append('Authorization', 'Token ' + currentUser.Authorization);
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Content-Type', 'application/json');
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    dataService.prototype.get = function (url) {
        var option = this.header();
        return this.http.get(this._url + url, option)
            .map(this.retrieveData);
    };
    dataService.prototype.post = function (url, body) {
        console.log(this._url);
        var option = this.header();
        console.log(option);
        return this.http.post(this._url + url, body, option)
            .map(this.retrieveData);
    };
    dataService.prototype.put = function (url, body) {
        var option = this.header();
        return this.http.put(this._url + url, body, option)
            .map(this.retrieveData);
    };
    dataService.prototype.delete = function (url, id) {
        var option = this.header();
        return this.http.delete(this._url + url + id.toString(), option)
            .map(this.retrieveData);
    };
    dataService.prototype.retrieveData = function (response) {
        var body = response.json();
        return body || {};
    };
    return dataService;
}());
dataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], dataService);
exports.dataService = dataService;
//# sourceMappingURL=data.service.js.map
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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var app_config_1 = require("../app.config");
var BucketlistService = (function () {
    function BucketlistService(http, config) {
        this.http = http;
        this.config = config;
        this._url = this.config.ApiUrl;
    }
    BucketlistService.prototype.header = function () {
        // create authorization header with token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers();
            headers.append('Authorization', 'Token ' + currentUser.token);
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Content-Type', 'application/json');
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    BucketlistService.prototype.GetAll = function (url) {
        var option = this.header();
        return this.http.get(this._url, option)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BucketlistService.prototype.GetSingle = function (id) {
        var option = this.header();
        return this.http.get(this._url + id, option)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BucketlistService.prototype.Add = function (title) {
        var option = this.header();
        var toAdd = JSON.stringify({ title: title });
        return this.http.post(this._url, toAdd, option)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BucketlistService.prototype.Update = function (id, titleToUpdate) {
        var option = this.header();
        var toPut = JSON.stringify({ titleToUpdate: titleToUpdate });
        return this.http.put(this._url + id, toPut, option)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BucketlistService.prototype.Delete = function (id) {
        var option = this.header();
        return this.http.delete(this._url + id)
            .catch(this.handleError);
    };
    BucketlistService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return BucketlistService;
}());
BucketlistService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], BucketlistService);
exports.BucketlistService = BucketlistService;
//# sourceMappingURL=bucketlist.service.js.map
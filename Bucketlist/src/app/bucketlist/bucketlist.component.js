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
var bucketlist_service_1 = require("../services/bucketlist.service");
var alert_service_1 = require("../services/alert.service");
var router_1 = require("@angular/router");
var BucketlistComponent = (function () {
    function BucketlistComponent(_bucketlistservice, alertservice, router) {
        this._bucketlistservice = _bucketlistservice;
        this.alertservice = alertservice;
        this.router = router;
    }
    BucketlistComponent.prototype.ngOnInit = function () {
    };
    BucketlistComponent.prototype.getAllBucketlists = function () {
        var _this = this;
        this._bucketlistservice
            .GetAll()
            .subscribe(function (data) { return _this.mybucketlist = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    BucketlistComponent.prototype.updateBucketlist = function (id, title) {
        var _this = this;
        if (title) {
            this._bucketlistservice
                .Update(id, title)
                .subscribe(function (data) { return _this.mybucketlist = data; }, function (error) { return console.log(error); }, function () { return console.log('Update  bucketlists complete'); });
        }
    };
    BucketlistComponent.prototype.deleteBucketlist = function (id) {
        var _this = this;
        if (id) {
            this._bucketlistservice
                .Delete(id)
                .subscribe(function (data) { return _this.mybucketlist = data; }, function (error) { return console.log(error); }, function () { return console.log('Delete bucketlist complete'); });
        }
    };
    return BucketlistComponent;
}());
BucketlistComponent = __decorate([
    core_1.Component({
        selector: 'bucketlist-app',
        providers: [bucketlist_service_1.BucketlistService],
        templateUrl: './bucketlist.component.html',
        styleUrls: ['./bucketlist.component.css']
    }),
    __metadata("design:paramtypes", [bucketlist_service_1.BucketlistService,
        alert_service_1.AlertService,
        router_1.Router])
], BucketlistComponent);
exports.BucketlistComponent = BucketlistComponent;
//# sourceMappingURL=bucketlist.component.js.map
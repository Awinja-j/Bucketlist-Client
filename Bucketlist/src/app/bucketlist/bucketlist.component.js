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
var router_1 = require("@angular/router");
var alert_service_1 = require("../services/alert.service");
var data_service_1 = require("../services/data.service");
var BucketlistComponent = (function () {
    function BucketlistComponent(_dataservice, alertservice, router) {
        this._dataservice = _dataservice;
        this.alertservice = alertservice;
        this.router = router;
        this.bucketlists = [];
        this.model = {};
        this.loading = false;
        this.items = [];
    }
    BucketlistComponent.prototype.ngOnInit = function () {
        this.getBucketlists();
    };
    BucketlistComponent.prototype.getBucketlists = function () {
        var _this = this;
        this._dataservice.get('/bucketlists/')
            .subscribe(function (bucketlists) {
            _this.bucketlists = bucketlists.Bucketlists;
            console.log(bucketlists);
        });
    };
    BucketlistComponent.prototype.assignId = function (bucketlist) {
        this.bucketid = bucketlist.id;
    };
    BucketlistComponent.prototype.updateBucketlist = function (bucketlist) {
        var _this = this;
        this.model = {
            "name": this.updatedname
        };
        this.loading = true;
        console.log(this.model);
        this._dataservice.put('/bucketlists/' + this.bucketid + '/', this.model)
            .subscribe(function (data) {
            _this.alertservice.success('Bucketlist Updated successfully', true);
            // this.getBucketlists();
            _this.router.navigate(['/bucketlist']);
        }, function (error) {
            _this.alertservice.error(error._body);
            _this.loading = false;
        });
    };
    BucketlistComponent.prototype.deleteBucketlist = function (bucketlist) {
        var _this = this;
        this.model = {
            'id': bucketlist.id
        };
        this._dataservice.delete('/bucketlists/', bucketlist.id)
            .subscribe(function (data) {
            _this.alertservice.success('Bucketlist successfully Deleted', true);
            _this.getBucketlists();
            _this.router.navigate(['/bucketlist']);
        }, function (error) {
            _this.alertservice.error(error._body);
            _this.loading = false;
        });
    };
    return BucketlistComponent;
}());
BucketlistComponent = __decorate([
    core_1.Component({
        selector: 'bucketlist-app',
        templateUrl: './bucketlist.component.html',
        styleUrls: ['./bucketlist.component.css']
    }),
    __metadata("design:paramtypes", [data_service_1.dataService,
        alert_service_1.AlertService,
        router_1.Router])
], BucketlistComponent);
exports.BucketlistComponent = BucketlistComponent;
//# sourceMappingURL=bucketlist.component.js.map
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
var ItemsComponent = (function () {
    function ItemsComponent(_dataservice, alertservice, router) {
        this._dataservice = _dataservice;
        this.alertservice = alertservice;
        this.router = router;
        this.items = [];
        this.model = {};
        this.loading = false;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.getitems();
    };
    ItemsComponent.prototype.getitems = function () {
        var _this = this;
        this._dataservice.get('/bucketlists/' + this.bucketid + '/items/')
            .subscribe(function (items) {
            _this.items = items.items;
            console.log(items);
        });
    };
    ItemsComponent.prototype.assignId = function (bucketlist) {
        this.bucketid = bucketlist.id;
    };
    ItemsComponent.prototype.updateitem = function (item) {
        var _this = this;
        this.model = {
            "title": this.updatedtitle
        };
        this.loading = true;
        this.url = '/bucketlists/' + this.bucketid + '/items/' + this.itemid;
        this._dataservice.put(this.url, this.model)
            .subscribe(function (data) {
            _this.alertservice.success('Bucketlist Updated successfully', true);
            // this.getBucketlists();
            _this.router.navigate(['/bucketlists/' + _this.bucketid + '/items/']);
        }, function (error) {
            _this.alertservice.error(error._body);
            _this.loading = false;
        });
    };
    ItemsComponent.prototype.deleteitem = function (item) {
        var _this = this;
        this.model = {
            'id': this.itemid
        };
        this.url = '/bucketlists/' + this.bucketid + '/items/';
        this._dataservice.delete(this.url, this.model)
            .subscribe(function (data) {
            _this.alertservice.success('Item successfully Deleted', true);
            _this.getitems();
            _this.router.navigate(_this.url);
        }, function (error) {
            _this.alertservice.error(error._body);
            _this.loading = false;
        });
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    core_1.Component({
        selector: 'items-app',
        providers: [data_service_1.dataService, alert_service_1.AlertService],
        templateUrl: './items.component.html',
        styleUrls: ['./items.component.css']
    }),
    __metadata("design:paramtypes", [data_service_1.dataService,
        alert_service_1.AlertService,
        router_1.Router])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items.component.js.map
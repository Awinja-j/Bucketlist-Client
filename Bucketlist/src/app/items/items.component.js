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
    function ItemsComponent(_dataservice, alertservice, router, route) {
        var _this = this;
        this._dataservice = _dataservice;
        this.alertservice = alertservice;
        this.router = router;
        this.route = route;
        this.items = [];
        this.model = {};
        this.loading = false;
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
            _this.bucketid = Number.parseInt(params.id);
        });
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.getitems();
    };
    ItemsComponent.prototype.goToEditItem = function (itemId) {
        this.router.navigate(['/edititem'], { queryParams: { "id": this.bucketid, "itemId": itemId } });
    };
    ItemsComponent.prototype.addItem = function () {
        this.router.navigate(['/additem'], { queryParams: { "id": this.bucketid } });
    };
    ItemsComponent.prototype.getitems = function () {
        var _this = this;
        this._dataservice.get('/bucketlists/' + this.bucketid + '/items')
            .subscribe(function (items) {
            _this.items = items.Items;
            console.log(items);
        });
    };
    ItemsComponent.prototype.assignId = function (bucketlist) {
        this.bucketid = bucketlist.id;
    };
    ItemsComponent.prototype.deleteitem = function (item) {
        var _this = this;
        this.model = {
            'id': this.itemid
        };
        this.url = '/bucketlists/' + this.bucketid + '/items/';
        this._dataservice.delete(this.url, item.id)
            .subscribe(function (data) {
            _this.alertservice.success('Item successfully Deleted', true);
            var index = _this.items.indexOf(item);
            if (index > -1) {
                _this.items.splice(index, 1);
            }
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
        styleUrls: ['./items.component.css'],
    }),
    __metadata("design:paramtypes", [data_service_1.dataService,
        alert_service_1.AlertService,
        router_1.Router,
        router_1.ActivatedRoute])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items.component.js.map
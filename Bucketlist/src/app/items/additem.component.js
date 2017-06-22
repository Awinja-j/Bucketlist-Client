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
var alert_service_1 = require("../services/alert.service");
var data_service_1 = require("../services/data.service");
var items_component_1 = require("../items/items.component");
var router_1 = require("@angular/router");
var AddItemComponent = (function () {
    function AddItemComponent(_dataservice, alertservice, itemscomponent, router, route) {
        var _this = this;
        this._dataservice = _dataservice;
        this.alertservice = alertservice;
        this.itemscomponent = itemscomponent;
        this.router = router;
        this.route = route;
        this.Items = [];
        this.model = {};
        this.loading = false;
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
            _this.bucketid = Number.parseInt(params.id);
        });
    }
    AddItemComponent.prototype.addItem = function () {
        var _this = this;
        this.model = {
            "title": this.itemtitle,
            "done": "False"
        };
        this.loading = true;
        this.url = '/bucketlists/' + this.bucketid + '/items';
        this._dataservice.post(this.url, this.model)
            .subscribe(function (data) {
            _this.alertservice.success('Item Successfully created', true);
            // this.itemscomponent.getitems();
            _this.router.navigate(['/bucketlists/' + _this.bucketid + '/items']);
        }, function (error) {
            _this.alertservice.error(error._body);
            _this.loading = false;
        });
    };
    return AddItemComponent;
}());
AddItemComponent = __decorate([
    core_1.Component({
        selector: 'additem-app',
        providers: [data_service_1.dataService, alert_service_1.AlertService, items_component_1.ItemsComponent],
        templateUrl: './additem.component.html',
        styleUrls: ['./additem.component.css']
    }),
    __metadata("design:paramtypes", [data_service_1.dataService,
        alert_service_1.AlertService,
        items_component_1.ItemsComponent,
        router_1.Router,
        router_1.ActivatedRoute])
], AddItemComponent);
exports.AddItemComponent = AddItemComponent;
//# sourceMappingURL=additem.component.js.map
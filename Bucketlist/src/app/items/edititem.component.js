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
var items_component_1 = require("../items/items.component");
var EditItemComponent = (function () {
    function EditItemComponent(_dataservice, alertservice, itemscomponent, router, route) {
        var _this = this;
        this._dataservice = _dataservice;
        this.alertservice = alertservice;
        this.itemscomponent = itemscomponent;
        this.router = router;
        this.route = route;
        this.bucketlists = [];
        this.model = {};
        this.loading = false;
        this.currentUser = [];
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
            _this.bucketid = Number.parseInt(params.id);
            _this.itemid = Number.parseInt(params.itemId);
        });
    }
    EditItemComponent.prototype.updateItem = function () {
        var _this = this;
        // debugger;
        this.model = {
            "title": this.updatedtitle
        };
        this.loading = true;
        this.url = '/bucketlists/' + this.bucketid + '/items/' + this.itemid;
        this._dataservice.put(this.url, this.model)
            .subscribe(function (data) {
            _this.alertservice.success('Bucketlist Updated successfully', true);
            // this.getBucketlists();
            _this.router.navigate(['/items'], { queryParams: { "id": _this.bucketid } });
        }, function (error) {
            _this.alertservice.error(error._body);
            _this.loading = false;
        });
    };
    return EditItemComponent;
}());
EditItemComponent = __decorate([
    core_1.Component({
        selector: 'edititem-app',
        providers: [data_service_1.dataService, alert_service_1.AlertService, items_component_1.ItemsComponent],
        templateUrl: './edititem.component.html',
        styleUrls: ['./additem.component.css']
    }),
    __metadata("design:paramtypes", [data_service_1.dataService,
        alert_service_1.AlertService,
        items_component_1.ItemsComponent,
        router_1.Router,
        router_1.ActivatedRoute])
], EditItemComponent);
exports.EditItemComponent = EditItemComponent;
//# sourceMappingURL=edititem.component.js.map
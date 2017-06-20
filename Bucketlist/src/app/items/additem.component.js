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
var bucketlist_component_1 = require("../bucketlist/bucketlist.component");
var router_1 = require("@angular/router");
var AddItemComponent = (function () {
    function AddItemComponent(_dataservice, alertservice, bucketcomponent, router) {
        this._dataservice = _dataservice;
        this.alertservice = alertservice;
        this.bucketcomponent = bucketcomponent;
        this.router = router;
        this.Items = [];
        this.model = {};
        this.loading = false;
        this.currentUser = [];
    }
    AddItemComponent.prototype.addItem = function (item) {
        var _this = this;
        this.model = {
            "title": this.itemtitle,
            "done": "False"
        };
        // console.log(this.model) 
        this.loading = true;
        this.url = '/bucketlists/' + this.bucketid + '/items/';
        this._dataservice.post(this.url, this.model)
            .subscribe(function (data) {
            _this.alertservice.success('Item Successfully created', true);
            _this.router.navigate(['/bucketlists/' + _this.bucketid + '/items/']);
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
        providers: [bucketlist_component_1.BucketlistComponent],
        templateUrl: './additem.component.html',
        styleUrls: ['./additem.component.css']
    }),
    __metadata("design:paramtypes", [data_service_1.dataService,
        alert_service_1.AlertService,
        bucketlist_component_1.BucketlistComponent,
        router_1.Router])
], AddItemComponent);
exports.AddItemComponent = AddItemComponent;
//# sourceMappingURL=additem.component.js.map
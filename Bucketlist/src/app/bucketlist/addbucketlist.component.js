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
var AddBucketlistComponent = (function () {
    function AddBucketlistComponent(_dataservice, alertservice, bucketcomponent, router) {
        this._dataservice = _dataservice;
        this.alertservice = alertservice;
        this.bucketcomponent = bucketcomponent;
        this.router = router;
        this.bucketlists = [];
        this.model = {};
        this.loading = false;
        this.currentUser = [];
    }
    AddBucketlistComponent.prototype.addBucketlist = function () {
        var _this = this;
        this.model = {
            "title": this.buckettitle,
            "created_by": this.currentUser.id
        };
        // console.log(this.currentUser.id)
        this.loading = true;
        this._dataservice.post('/bucketlists/', this.model)
            .subscribe(function (data) {
            _this.alertservice.success('Bucketlist Successfully created', true);
            _this.bucketcomponent.getBucketlists();
            _this.router.navigate(['/bucketlist']);
        }, function (error) {
            _this.alertservice.error(error._body);
            _this.loading = false;
        });
    };
    return AddBucketlistComponent;
}());
AddBucketlistComponent = __decorate([
    core_1.Component({
        selector: 'addbucketlist-app',
        providers: [bucketlist_component_1.BucketlistComponent],
        templateUrl: './addbucketlist.component.html',
        styleUrls: ['./addbucketlist.component.css']
    }),
    __metadata("design:paramtypes", [data_service_1.dataService,
        alert_service_1.AlertService,
        bucketlist_component_1.BucketlistComponent,
        router_1.Router])
], AddBucketlistComponent);
exports.AddBucketlistComponent = AddBucketlistComponent;
//# sourceMappingURL=addbucketlist.component.js.map
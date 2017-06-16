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
var _this = this;
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
        this.getAllItems();
    };
    //...
    BucketlistComponent.prototype.getAllItems = function () {
        var _this = this;
        this._bucketlistservice
            .GetAll()
            .subscribe(function (data) { return _this.myItems = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
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
updateBucketlist(bucketlist, any);
{
    var updatedtitle = void 0;
    var bucketlist = [];
    this.model = {
        "title": this.updatedtitle
    };
    this.loading = true;
    console.log(this.model);
    this._bucketlistservice.put('/bucketlists/' + bucketlist.id + '/', this.model)
        .subscribe(function (data) {
        _this.alertservice.success('Bucketlist Updated successfully', true);
        _this.getBucketlists();
    }, function (error) {
        _this.alertservice.error(error._body);
        _this.loading = false;
    });
}
deleteBucketlist(bucketlist, any);
{
    var bucketlist = [];
    this._bucketlistservice.delete('/bucketlists/' + bucketlist.id + '/')
        .subscribe(function (data) {
        _this.alertservice.success('Bucketlist successfully Deleted', true);
        _this.getBucketlists();
    }, function (error) {
        _this.alertservice.error(error._body);
        _this.loading = false;
    });
}
addBucketlist();
{
    this.model = {
        "title": this.bucketname,
        "items": this.items
    };
    console.log(this.model);
    this.loading = true;
    this._dataservice.post('/bucketlists/', this.model)
        .subscribe(function (data) {
        _this.alertservice.success('Bucketlist Successfully created', true);
        _this.getBucketlists();
        _this.router.navigate(['/bucketlists']);
    }, function (error) {
        _this.alertservice.error(error._body);
        _this.loading = false;
    });
}
//# sourceMappingURL=bucketlist.component.js.map
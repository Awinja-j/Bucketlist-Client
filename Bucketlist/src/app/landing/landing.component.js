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
var user_service_1 = require("../services/user.service");
var alert_service_1 = require("../services/alert.service");
var authentication_service_1 = require("../services/authentication.service");
var LandingComponent = (function () {
    function LandingComponent(router, userService, alertService, authservice) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.authservice = authservice;
        this.model = {};
        this.loading = false;
        this.mode = 'register';
    }
    LandingComponent.prototype.register = function () {
        var _this = this;
        this.model = {
            "email": this.email,
            "password": this.password
        };
        console.log(this.model);
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.authservice.login(_this.email, _this.password).subscribe(function (data) {
                _this.router.navigate(['/bucketlist']);
            }, function (error) {
                _this.alertService.error(error._body);
                _this.loading = false;
            });
        }, function (error) {
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    core_1.Component({
        selector: 'landing-app',
        templateUrl: './landing.component.html',
        styleUrls: ['./landing.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        user_service_1.UserService,
        alert_service_1.AlertService,
        authentication_service_1.AuthenticationService])
], LandingComponent);
exports.LandingComponent = LandingComponent;
//# sourceMappingURL=landing.component.js.map
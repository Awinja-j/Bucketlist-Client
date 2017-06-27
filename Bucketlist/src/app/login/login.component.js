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
var authentication_service_1 = require("../services/authentication.service");
var alert_service_1 = require("../services/alert.service");
var LoginComponent = (function () {
    function LoginComponent(authService, _service, _router, route) {
        this.authService = authService;
        this._service = _service;
        this._router = _router;
        this.route = route;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/bucketlist';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.email, this.password)
            .subscribe(function (data) {
            _this._router.navigate([_this.returnUrl]);
        }, function (error) {
            _this._service.error(error._body);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-app',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'],
        providers: [alert_service_1.AlertService, authentication_service_1.AuthenticationService]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        alert_service_1.AlertService,
        router_1.Router,
        router_1.ActivatedRoute])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
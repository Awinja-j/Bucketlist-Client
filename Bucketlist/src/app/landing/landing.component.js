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
var LandingComponent = (function () {
    function LandingComponent(authService, _service, _router) {
        this.authService = authService;
        this._service = _service;
        this._router = _router;
        this.mode = 'register';
        this.user = {
            'email': '',
            'password': '',
        };
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.user.email = '';
        this.user.password = '';
    };
    LandingComponent.prototype.register = function () {
        var _this = this;
        this.response = this.authService.register(this.user.email, this.user.password)
            .subscribe(function (response) {
            response = response;
            if (response['result']) {
                _this._service(response['message'], '', {
                    timeOut: 3000,
                    pauseOnHover: false,
                    clickToClose: false,
                    maxLength: 50
                });
                _this.login();
            }
            else {
                _this._service.error('Oops.', response['error'], {
                    timeOut: 3000,
                    pauseOnHover: false,
                    clickToClose: false,
                    maxLength: 50
                });
            }
        });
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    core_1.Component({
        selector: 'landing-app',
        templateUrl: './landing.component.html',
        styleUrls: ['./landing.component.css'],
        providers: [authentication_service_1.AuthenticationService]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        authentication_service_1.AuthenticationService,
        router_1.Router])
], LandingComponent);
exports.LandingComponent = LandingComponent;
//# sourceMappingURL=landing.component.js.map
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
var LoginComponent = (function () {
    function LoginComponent(authService, _service, _router) {
        this.authService = authService;
        this._service = _service;
        this._router = _router;
        this.mode = 'login';
        this.user = {
            'email': '',
            'password': '',
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user.email = '';
        this.user.password = '';
        this.token = localStorage.getItem('token');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.response = this.authService.login(this.user.username, this.user.password)
            .subscribe(function (response) {
            response = response;
            if (response['result']) {
                localStorage.setItem('token', response['access_token']);
                localStorage.setItem('authorised', response['result']);
                _this._router.navigate(['/bucketlists']);
            }
            else {
                _this._service.error('Oops.', response['error'], {
                    timeOut: 3000,
                    pauseOnHover: false,
                    clickToClose: false,
                    maxLength: 50
                });
                localStorage.setItem('authorised', response['result']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-app',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'],
        // providers:[ AlertService ],
        providers: [authentication_service_1.AuthenticationService]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        authentication_service_1.AuthenticationService,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
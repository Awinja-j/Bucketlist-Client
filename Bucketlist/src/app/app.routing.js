"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var bucketlist_component_1 = require("./bucketlist/bucketlist.component");
var items_component_1 = require("./items/items.component");
var landing_component_1 = require("./landing/landing.component");
var addbucketlist_component_1 = require("./bucketlist/addbucketlist.component");
var additem_component_1 = require("./items/additem.component");
var editbucketlist_component_1 = require("./bucketlist/editbucketlist.component");
var appRoutes = [
    { path: 'home', component: app_component_1.AppComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'bucketlist', component: bucketlist_component_1.BucketlistComponent },
    { path: 'items', component: items_component_1.ItemsComponent },
    { path: '', component: landing_component_1.LandingComponent },
    { path: 'additem', component: additem_component_1.AddItemComponent },
    { path: 'addbucketlist', component: addbucketlist_component_1.AddBucketlistComponent },
    { path: 'editbucketlist', component: editbucketlist_component_1.EditBucketlistComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
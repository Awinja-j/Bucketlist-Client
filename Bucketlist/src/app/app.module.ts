import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppConfig } from './app.config';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BucketlistComponent} from './bucketlist/bucketlist.component';
import { ItemsComponent } from './items/items.component'; 
import { LandingComponent } from './landing/landing.component';
import { AlertService } from './services/alert.service';
import { AlertComponent } from './directives/alert.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { AddBucketlistComponent } from './bucketlist/addbucketlist.component';
import { AddItemComponent } from './items/additem.component';
import { EditBucketlistComponent } from './bucketlist/editbucketlist.component';
import { NavBar } from './nav/nav.component';
import { UserService } from './services/user.service';
import { dataService } from './services/data.service';


@NgModule ({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],

    declarations:[
        AppComponent, 
        RegisterComponent, 
        LoginComponent, 
        BucketlistComponent, 
        ItemsComponent,
        LandingComponent,
        AlertComponent,
        AddBucketlistComponent,
        AddItemComponent,
        NavBar,
        EditBucketlistComponent
        ],

    providers: [
        AppConfig,
        AlertService,
        AuthGuard,
        AuthenticationService,
        UserService,
        dataService
    ],

    bootstrap: [AppComponent]

})
export class AppModule { }
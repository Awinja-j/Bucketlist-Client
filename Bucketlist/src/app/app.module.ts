import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
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

@NgModule ({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],

    declarations:[
        AppComponent, 
        RegisterComponent, 
        LoginComponent, 
        BucketlistComponent, 
        ItemsComponent,
        LandingComponent,
        AlertComponent
        ],

    providers: [
        AlertService,
        AuthGuard,
        AuthenticationService

    ],

    bootstrap: [AppComponent]

})
export class AppModule { }
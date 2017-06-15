import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BucketlistComponent} from './bucketlist/bucketlist.component';
import { ItemsComponent } from './items/items.component'; 
import { LandingComponent } from './landing/landing.component';


const appRoutes: Routes = [
    {path: 'home', component:AppComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'login', component:LoginComponent},
    {path: 'bucketlist', component:BucketlistComponent},
    {path: 'items', component:ItemsComponent},
    {path: 'landing', component:LandingComponent}

];
export const routing = RouterModule.forRoot(appRoutes)

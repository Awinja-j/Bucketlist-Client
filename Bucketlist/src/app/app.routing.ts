import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BucketlistComponent} from './bucketlist/bucketlist.component';
import { ItemsComponent } from './items/items.component'; 
import { LandingComponent } from './landing/landing.component';
import { AddBucketlistComponent } from './bucketlist/addbucketlist.component';
import { AddItemComponent } from './items/additem.component';



const appRoutes: Routes = [
    {path: 'home', component:AppComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'login', component:LoginComponent},
    {path: 'bucketlist', component:BucketlistComponent},
    {path: 'items', component:ItemsComponent},
    {path: '', component:LandingComponent},
    {path: 'additem', component:AddItemComponent},
    {path: 'addbucketlist', component:AddBucketlistComponent}

];
export const routing = RouterModule.forRoot(appRoutes)

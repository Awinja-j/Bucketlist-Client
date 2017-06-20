import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { dataService } from '../services/data.service';

import { Router} from '@angular/router';


@Component({
    selector: 'nav-app',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavBar {
    constructor( private _dataservice: dataService,
                private alertservice: AlertService,

                private authservice: AuthenticationService,
                private router: Router){}

    home (){
        this.router.navigate(['/']);
    }

    logout(){
        this.authservice.logout();
        this.router.navigate(['/']);
    }

    bucketlist(){
        this.router.navigate(['/bucketlist']);
    }
}

import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { dataService } from '../services/data.service';

import { BucketlistComponent } from '../bucketlist/bucketlist.component';

import { Router} from '@angular/router';

@Component({
    selector:'addbucketlist-app',
    providers: [BucketlistComponent],
    templateUrl:'./addbucketlist.component.html',
    styleUrls: ['./addbucketlist.component.css']

})
export class AddBucketlistComponent {
    bucketlists:any  = [];
    model: any = {};
    loading = false;
    buckettitle:string;
    bucketid: any;
    url:any;
    currentUser: any = [];

    constructor( private _dataservice: dataService,
                 private alertservice: AlertService,
                 private bucketcomponent: BucketlistComponent,
                 private router: Router){}
    addBucketlist(){
            this.model = {
                "title":this.buckettitle,
                "created_by":this.currentUser.id
            }
            this.loading = true;
            this._dataservice.post('/bucketlists/',this.model)
                .subscribe(
                    (data:any) => {
                        this.alertservice.success('Bucketlist Successfully created', true);
                        this.bucketcomponent.getBucketlists();
                        this.router.navigate(['/bucketlist']);
                    },
                    (error:any) => {
                        this.alertservice.error(error._body);
                        this.loading = false;
                    });
        }
}
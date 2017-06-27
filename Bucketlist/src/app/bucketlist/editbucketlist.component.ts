import { Component} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { AlertService } from '../services/alert.service';
import { dataService } from '../services/data.service';
import { BucketlistComponent } from '../bucketlist/bucketlist.component';

declare var $: any;

@Component({
    selector: 'editbucketlist-app',
    providers: [dataService, AlertService, BucketlistComponent],
    templateUrl: './editbucketlist.component.html',
    styleUrls:['./addbucketlist.component.css']
})
export class EditBucketlistComponent {
    bucketlists:any  = [];
    model: any = {};
    loading = false;
    updatedtitle:string;
    bucketid: number;
    url:any;
    currentUser: any = [];
    

    constructor( private _dataservice: dataService,
                 private alertservice: AlertService,
                 private bucketcomponent: BucketlistComponent,
                 private router: Router,
                 private route: ActivatedRoute)
                 {
                      this.route.queryParams.subscribe(params => {
                          console.log(params);
                      this.bucketid = Number.parseInt(params.id);
        });
                  }

    updateBucketlist(){
        // debugger;
        this.model = {
            "title":this.updatedtitle
        }
        this.loading = true;
        this._dataservice.put('/bucketlists/' + this.bucketid, this.model)
            .subscribe(
                data => {
                    this.alertservice.success('Bucketlist Updated successfully', true);
                    console.log('anything')
                    // this.getBucketlists();
                    this.router.navigate(['/bucketlist']);
                },
                error => {
                    this.alertservice.error(error._body);
                    this.loading = false;
                });
    }
}
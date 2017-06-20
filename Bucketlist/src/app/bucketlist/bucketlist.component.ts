import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../services/alert.service';
import { dataService } from '../services/data.service';

declare var $: any;

@Component({
    selector: 'bucketlist-app',
    templateUrl: './bucketlist.component.html',
    styleUrls:['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit{
    bucketlists:any  = [];
    model: any = {};
    loading = false;
    bucketname:string;
    bucketid: any;
    updatedname: any;
    itemname: any;
    url:any;
    items:any = []; 

    constructor( private _dataservice: dataService,
                 private alertservice: AlertService,
                 private router: Router){}
    ngOnInit(){
        this.getBucketlists();
    }

    getBucketlists(){
        this._dataservice.get('/bucketlists/')
            .subscribe(bucketlists => { this.bucketlists = bucketlists.Bucketlists;
           console.log(bucketlists) });
            
            
    }
    assignId(bucketlist:any){
        this.bucketid = bucketlist.id;
    }
    updateBucketlist(bucketlist:any ){
        this.model = {
            "name":this.updatedname
        }
        this.loading = true;
        console.log(this.model)
        this._dataservice.put('/bucketlists/'+ this.bucketid + '/', this.model)
            .subscribe(
                data => {
                    this.alertservice.success('Bucketlist Updated successfully', true);
                    // this.getBucketlists();
                    this.router.navigate(['/bucketlist']);
                },
                error => {
                    this.alertservice.error(error._body);
                    this.loading = false;
                });
    }

    deleteBucketlist(bucketlist:any){
        this.model = {
            'id':bucketlist.id
        }
        this._dataservice.delete('/bucketlists/', bucketlist.id )
            .subscribe(
                    (data:any) => {
                        this.alertservice.success('Bucketlist successfully Deleted', true);
                        this.getBucketlists();
                        this.router.navigate(['/bucketlist']);
                    },
                    (error:any) => {
                        this.alertservice.error(error._body);
                        this.loading = false;
                    });

    }

    
}

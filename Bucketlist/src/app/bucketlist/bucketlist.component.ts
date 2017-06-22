import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { AlertService } from '../services/alert.service';
import { dataService } from '../services/data.service';

declare var $: any;

@Component({
    selector: 'bucketlist-app',
    providers: [dataService, AlertService],
    templateUrl: './bucketlist.component.html',
    styleUrls:['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit{
    bucketlists:any  = [];
    model: any = {};
    loading = false;
    bucketname:string;
    bucketid: number;
    updatedtitle: any;
    itemname: any;
    url:any;
    items:any = []; 
    

    constructor( private _dataservice: dataService,
                 private alertservice: AlertService,
                 private router: Router,
                 private route: ActivatedRoute){
                     
                 }
    ngOnInit(){
        this.getBucketlists();
    }

    getBucketlists(){
        this._dataservice.get('/bucketlists/')
            .subscribe(bucketlists => { this.bucketlists = bucketlists.Bucketlists;
           console.log(bucketlists) });
            
            
    }
    // assignId(bucketlist:any){
    //     this.bucketid = bucketlist.id;
    // }

    goToEditbucketlist(id:number){
        
        this.router.navigate(['/editbucketlist'], {queryParams: {"id":id}});
    }

    goToViewItems(id:number){
        console.log(id)
        this.router.navigate(['/items'], {queryParams: {"id":id}});
    }
            

    goToAddItem(id:number){
        this.router.navigate(['/additem'], {queryParams: {"id":id}});
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

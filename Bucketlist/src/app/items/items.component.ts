import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { AlertService } from '../services/alert.service';
import { dataService } from '../services/data.service';

declare var $: any;

@Component({
    selector:'items-app',
    providers: [dataService, AlertService],
    templateUrl:'./items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
    items :any  = [];
    model: any = {};
    loading = false;
    itemtitle:string;
    itemid: any;
    updatedtitle: any;
    url:any;
    bucketid: number;
    constructor( private _dataservice: dataService,
                 private alertservice: AlertService,
                 private router: Router,
                 private route: ActivatedRoute)
                 {
                     this.route.queryParams.subscribe(params => {
                          console.log(params);
                      this.bucketid = Number.parseInt(params.id);
        });
                  }
    ngOnInit(){
        this.getitems();
    }

    getitems(){
        console.log(this.bucketid)
        this._dataservice.get('/bucketlists/'+ this.bucketid + '/items/')
            .subscribe(items => 
            { this.items = items.items;
            console.log(items) });
            
            
    }
    assignId(bucketlist:any){
        this.bucketid = bucketlist.id;
    }

    updateitem(item:any ){
        this.model = {
            "title":this.updatedtitle
        }
        this.loading = true;
        this.url = '/bucketlists/'+ this.bucketid + '/items/' + this.itemid;
        this._dataservice.put(this.url, this.model)
            .subscribe(
                data => {
                    this.alertservice.success('Bucketlist Updated successfully', true);
                    // this.getBucketlists();
                    this.router.navigate(['/bucketlists/'+ this.bucketid + '/items/']);
                },
                error => {
                    this.alertservice.error(error._body);
                    this.loading = false;
                });
    }

    deleteitem(item:any){
        this.model = {
            'id':this.itemid
        }
        this.url = '/bucketlists/' + this.bucketid + '/items/';
        this._dataservice.delete(this.url, this.model)
        .subscribe(
            (data:any) => {
                this.alertservice.success('Item successfully Deleted', true);
                this.getitems();
                this.router.navigate(this.url);
            },
            (error:any) => {
                this.alertservice.error(error._body);
                this.loading = false;
            });

    }
    
}



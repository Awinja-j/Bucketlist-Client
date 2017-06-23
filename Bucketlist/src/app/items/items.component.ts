import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { AlertService } from '../services/alert.service';
import { dataService } from '../services/data.service';

declare var $: any;

@Component({
    selector:'items-app',
    providers: [dataService, AlertService],
    templateUrl:'./items.component.html',
    styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit{
    items: any  = [];
    model: any = {};
    loading = false;
    itemtitle:string;
    itemid: any;
    updatedtitle: any;
    url:any;
    bucketid: number;
    searchtitle: string;
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
    goToEditItem(itemId:number){
        
        this.router.navigate(['/edititem'], {queryParams: {"id":this.bucketid, "itemId": itemId}});
    }
    addItem(){
        
        this.router.navigate(['/additem'], {queryParams: {"id":this.bucketid}});
    }

    getitems(){
        this._dataservice.get('/bucketlists/'+ this.bucketid + '/items')
            .subscribe(items => 
            { this.items = items.Items;
            console.log(items) });
            
            
    }
    assignId(bucketlist:any){
        this.bucketid = bucketlist.id;
    }

    

    deleteitem(item:any){
        this.model = {
            'id':this.itemid
        }
        this.url = '/bucketlists/' + this.bucketid + '/items/';
        this._dataservice.delete(this.url, item.id)
        .subscribe(
            (data:any) => {
                this.alertservice.success('Item successfully Deleted', true);
                let index = this.items.indexOf(item);

                if (index > -1) {
                    this.items.splice(index, 1);
                }
            },
            (error:any) => {
                this.alertservice.error(error._body);
                this.loading = false;
            });

    }
    
}




import { Component} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { AlertService } from '../services/alert.service';
import { dataService } from '../services/data.service';
import { ItemsComponent } from '../items/items.component';

declare var $: any;

@Component({
    selector: 'edititem-app',
    providers: [dataService, AlertService, ItemsComponent],
    templateUrl: './edititem.component.html',
    styleUrls:['./additem.component.css']
})
export class EditItemComponent {
    bucketlists:any  = [];
    model: any = {};
    loading = false;
    updatedtitle:string;
    bucketid: number;
    url:any;
    currentUser: any = [];
    itemid: number;
    

    constructor( private _dataservice: dataService,
                 private alertservice: AlertService,
                 private itemscomponent: ItemsComponent,
                 private router: Router,
                 private route: ActivatedRoute)
                 {
                      this.route.queryParams.subscribe(params => {
                          console.log(params);
                      this.bucketid = Number.parseInt(params.id);
                      this.itemid = Number.parseInt(params.itemId);
        });
                  }

    updateItem(){
        // debugger;
        this.model = {
            "title":this.updatedtitle
        }
        this.loading = true;
        this.url = '/bucketlists/' + this.bucketid + '/items/' + this.itemid;
        this._dataservice.put(this.url, this.model)
            .subscribe(
                data => {
                    this.alertservice.success('Bucketlist Updated successfully', true);
                    // this.getBucketlists();
                    this.router.navigate(['/items'], {queryParams: {"id":this.bucketid}});
                },
                error => {
                    this.alertservice.error(error._body);
                    this.loading = false;
                });
    }
}
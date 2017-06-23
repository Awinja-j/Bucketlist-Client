import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { dataService } from '../services/data.service';

import { ItemsComponent } from '../items/items.component';

import { Router, ActivatedRoute} from '@angular/router';


@Component({
    selector:'additem-app',
    providers: [dataService, AlertService, ItemsComponent],
    templateUrl:'./additem.component.html',
    styleUrls: ['./additem.component.css']

})
export class AddItemComponent{
    Items :any  = [];
    model: any = {};
    loading = false;
    itemtitle:string;
    url:any;
    bucketid: any;

    constructor( private _dataservice: dataService,
                 private alertservice: AlertService,
                 private itemscomponent: ItemsComponent,
                 private router: Router,
                 private route: ActivatedRoute
                  ){
                      this.route.queryParams.subscribe(params => {
                          console.log(params);
                      this.bucketid = Number.parseInt(params.id);
        });
                  }
    addItem(){
        this.model = {
            "title":this.itemtitle,
            "done": "False"
        }
        this.loading = true;
        this.url = '/bucketlists/' + this.bucketid + '/items';
        this._dataservice.post(this.url,this.model)
            .subscribe(
                data => {
                    this.alertservice.success('Item Successfully created', true);
                    this.itemscomponent.getitems();
                    console.log(this.bucketid)
                    this.router.navigate(['/items'], {queryParams: {"id":this.bucketid}});
                },
                error => {
                    this.alertservice.error(error._body);
                    this.loading = false;
                });
                
    }
}

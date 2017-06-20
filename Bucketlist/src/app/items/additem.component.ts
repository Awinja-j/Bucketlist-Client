import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { dataService } from '../services/data.service';

import { BucketlistComponent } from '../bucketlist/bucketlist.component';

import { Router} from '@angular/router';


@Component({
    selector:'additem-app',
    providers: [BucketlistComponent],
    templateUrl:'./additem.component.html',
    styleUrls: ['./additem.component.css']

})
export class AddItemComponent{
    Items :any  = [];
    model: any = {};
    loading = false;
    itemtitle:string;
    itemid: any;
    url:any;
    currentUser: any = [];
    bucketid: any;

    constructor( private _dataservice: dataService,
                 private alertservice: AlertService,
                 private bucketcomponent: BucketlistComponent,
                 private router: Router){}
    addItem(item:any){
        this.model = {
            "title":this.itemtitle,
            "done": "False"
        }
        // console.log(this.model) 
        this.loading = true;
        this.url = '/bucketlists/' + this.bucketid + '/items/';
        this._dataservice.post(this.url,this.model)
            .subscribe(
                data => {
                    this.alertservice.success('Item Successfully created', true);
                    this.router.navigate(['/bucketlists/' + this.bucketid + '/items/']);
                },
                error => {
                    this.alertservice.error(error._body);
                    this.loading = false;
                });
                
    }
}

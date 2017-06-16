import { Component, OnInit } from '@angular/core';
import { BucketlistService } from '../services/bucketlist.service';
import { Bucketlist } from '../models/bucketlist.model';
import { AlertService } from '../services/alert.service';
import { Router} from '@angular/router';

@Component({
    selector:'bucketlist-app',
    providers: [BucketlistService],
    templateUrl:'./bucketlist.component.html',
    styleUrls: ['./bucketlist.component.css']

})
export class BucketlistComponent implements OnInit{
    public mybucketlist: Bucketlist [];

    constructor(private _bucketlistservice: BucketlistService,
                private alertservice: AlertService,
                private router: Router){
                }

    ngOnInit() {
        this.getAllItems();
    }
    
    //...

 getAllItems(): void {
        this._bucketlistservice
            .GetAll()
            .subscribe((data:Bucketlist[]) => this.myItems = data,
                error => console.log(error),
                () => console.log('Get all Items complete'));
    }
}

updateBucketlist(bucketlist:any ){
        let updatedtitle: any;
        let bucketlist:any  = [];
        this.model = {
            "title":this.updatedtitle
        }
        this.loading = true;
        console.log(this.model)
        this._bucketlistservice.put('/bucketlists/'+ bucketlist.id + '/', this.model)
            .subscribe(
                data => {
                    this.alertservice.success('Bucketlist Updated successfully', true);
                    this.getBucketlists();
                },
                error => {
                    this.alertservice.error(error._body);
                    this.loading = false;
                });
    }

    deleteBucketlist(bucketlist:any){
        let bucketlist:any  = [];
        this._bucketlistservice.delete('/bucketlists/' + bucketlist.id + '/')
            .subscribe(
                    data => {
                        this.alertservice.success('Bucketlist successfully Deleted', true);
                        this.getBucketlists();
                    },
                    error => {
                        this.alertservice.error(error._body);
                        this.loading = false;
                    });

    }

    addBucketlist(){
        this.model = {
            "title":this.bucketname,
            "items":this.items
        }
        console.log(this.model) 
        this.loading = true;
        this._dataservice.post('/bucketlists/',this.model)
            .subscribe(
                data => {
                    this.alertservice.success('Bucketlist Successfully created', true);
                    this.getBucketlists();
                    this.router.navigate(['/bucketlists']);
                },
                error => {
                    this.alertservice.error(error._body);
                    this.loading = false;
                });
    }
}

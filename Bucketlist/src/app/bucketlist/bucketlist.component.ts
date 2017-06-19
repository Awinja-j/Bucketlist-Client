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

    ngOnInit(): void {
    }

  getAllBucketlists():void {
        this._bucketlistservice
            .GetAll()
            .subscribe((data:Bucketlist[]) => this.mybucketlist = data,
                error => console.log(error),
                () => console.log('Get all Items complete'));
    }

 updateBucketlist(id: number, title: string):void {
      if (title){
        this._bucketlistservice
            .Update(id, title)
            .subscribe((data:Bucketlist[]) => this.mybucketlist = data,
                    error => console.log(error),
                () => console.log('Update  bucketlists complete'));
    }
 }

    deleteBucketlist(id: number): void {
        if (id){
            this._bucketlistservice
            .Delete(id)
            .subscribe((data:Bucketlist[]) => this.mybucketlist = data,
                    error => console.log(error),
                () => console.log('Delete bucketlist complete'));
    }

        }

}
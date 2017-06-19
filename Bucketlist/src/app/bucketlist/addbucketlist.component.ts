import { Component, OnInit } from '@angular/core';
import { BucketlistService } from '../services/bucketlist.service';
import { Bucketlist } from '../models/bucketlist.model';
import { AlertService } from '../services/alert.service';


import { Router} from '@angular/router';

@Component({
    selector:'addbucketlist-app',
    providers: [BucketlistService],
    templateUrl:'./addbucketlist.component.html',
    styleUrls: ['./addbucketlist.component.css']

})
export class AddBucketlistComponent implements OnInit{
        public mybucketlist: Bucketlist [];
constructor(private _bucketlistservice: BucketlistService,
        private alertservice: AlertService,
        private router: Router){
        }

    ngOnInit() {
    this.addBucketlist();
    }
    addBucketlist(title: string): void {
            this._bucketlistservice
                .Add(title)
                .subscribe((data:Bucketlist[]) => this.mybucketlist = data,
                    error => console.log(error),
                    () => console.log('Add Bucketlist complete'));
        }
}
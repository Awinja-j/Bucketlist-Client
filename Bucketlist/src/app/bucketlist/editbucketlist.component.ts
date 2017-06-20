mport { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../services/alert.service';
import { dataService } from '../services/data.service';

declare var $: any;

@Component({
    selector: 'bucketlist-app',
    templateUrl: './bucketlist.component.html',
    styleUrls:['./bucketlist.component.css']
})
export class EditBucketlistComponent {}

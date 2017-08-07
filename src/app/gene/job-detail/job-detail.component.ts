import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import {RestApiService} from "../../service/rest-api.service";
import 'rxjs/add/operator/switchMap';
import {Job} from "../../models/job";
import {Report} from "../../models/report";
import {ReportUnit} from "../../models/report-unit";

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job: Job;
  reports: Report[];
  reportUnits: ReportUnit;

  constructor(private restApiService: RestApiService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.restApiService.getJobDetail(params.get('id')))
      .subscribe(data => {
        this.job = data['job'];
        this.reports = data['reports'];
        this.reportUnits = data['report_units']

      });
  }

}

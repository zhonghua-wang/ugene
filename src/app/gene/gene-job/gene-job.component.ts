import {Component, OnInit} from '@angular/core';
import {Job} from "../../models/job";
import {Mutant} from "../../models/mutant";
import {User} from "../../models/user";
import {RestApiService} from "../../service/rest-api.service";
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-gene-job',
  templateUrl: './gene-job.component.html',
  styleUrls: ['./gene-job.component.css']
})
export class GeneJobComponent implements OnInit {
  job: Job = new Job();
  jobList: Job[];
  mutant: Mutant = new Mutant();
  submitted: boolean = false;
  currentUser: User = new User();


  constructor(private restApiService: RestApiService) {
  }

  ngOnInit() {
    this.restApiService.currentUser$
      .filter(user => user.id != undefined)
      .subscribe(
        user => {
          this.currentUser = user;
          console.log(user.username);
          this.getJobList();
        }
      )
  }

  newJob() {
    this.submitted = false;
  }

  onSubmit() {
    this.job.user = this.currentUser.id;
    console.log(this.job)
    this.restApiService.addJob(this.job).subscribe(
      data => this.submitted = true,
      error => console.log('error occur at submitting job.')
  )

  }

  getJobList() {
    // todo user id change check
    this.restApiService.getJobs(this.currentUser.id)
      .subscribe(jobList => this.jobList = jobList)
  }


}

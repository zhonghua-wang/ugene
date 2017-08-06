import { Component, OnInit } from '@angular/core';
import {Job} from "../../models/job";
import {Mutant} from "../../models/mutant";
import {User} from "../../models/user";

@Component({
  selector: 'app-gene-job',
  templateUrl: './gene-job.component.html',
  styleUrls: ['./gene-job.component.css']
})
export class GeneJobComponent implements OnInit {
  job: Job = new Job();
  mutant: Mutant = new Mutant();
  submitted: boolean = false;
  currentUser: User;

  constructor() { }

  ngOnInit() {
  }
  newJob(){
    this.submitted = false;
  }
  onSubmit(){
    this.submitted = true;
  }
}

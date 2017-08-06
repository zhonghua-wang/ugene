import { Component, OnInit } from '@angular/core';
import {Job} from "../../models/job";
import {Mutant} from "../../models/mutant";

@Component({
  selector: 'app-gene-job',
  templateUrl: './gene-job.component.html',
  styleUrls: ['./gene-job.component.css']
})
export class GeneJobComponent implements OnInit {
  job: Job;
  mutant: Mutant;
  submitted: boolean = false;

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

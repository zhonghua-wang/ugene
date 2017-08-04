import { Component, OnInit } from '@angular/core';
import {Job} from "../../models/job";

@Component({
  selector: 'app-gene-job',
  templateUrl: './gene-job.component.html',
  styleUrls: ['./gene-job.component.css']
})
export class GeneJobComponent implements OnInit {
  job: Job;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

  }
}

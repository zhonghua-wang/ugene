import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

// import { GeneRoutingModule } from './gene-routing.module';
import { GeneJobComponent } from './gene-job/gene-job.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobStatusPipe } from './job-status.pipe';
import { JobDetailComponent } from './job-detail/job-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // GeneRoutingModule
  ],
  declarations: [GeneJobComponent, JobListComponent, JobStatusPipe, JobDetailComponent]
})
export class GeneModule { }

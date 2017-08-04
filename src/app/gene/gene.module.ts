import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

// import { GeneRoutingModule } from './gene-routing.module';
import { GeneJobComponent } from './gene-job/gene-job.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // GeneRoutingModule
  ],
  declarations: [GeneJobComponent]
})
export class GeneModule { }

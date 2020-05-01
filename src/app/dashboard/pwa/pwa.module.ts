/*
 * File: pwa.module.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 4:04:23 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 9:04:30 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PwaRoutingModule } from './pwa-routing.module';
import { PwaComponent } from './pwa.component';
import { FileUploadZoneModule } from '../../components/file-upload-zone/file-upload-zone.module';
import { FileUploadProgressModule } from '../../components/file-upload-progress/file-upload-progress.module';
import { WebittoButtonModule } from '../../core/directives/webitto-button.module';
import { SectionHeaderModule } from '../../components/section-header/section-header.module';

@NgModule({
  declarations: [PwaComponent],
  imports: [
    CommonModule,
    PwaRoutingModule,
    FlexLayoutModule,
    FileUploadZoneModule,
    FileUploadProgressModule,
    WebittoButtonModule,
    SectionHeaderModule,
  ],
})
export class PwaModule {}

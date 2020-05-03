/*
 * File: favicon-download-routing.module.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 11:53:41 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 7:57:56 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaviconDownloadComponent } from './favicon-download.component';

const routes: Routes = [{ path: '', component: FaviconDownloadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaviconDownloadRoutingModule {}

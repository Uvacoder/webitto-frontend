/*
 * File: tools-menu.component.ts
 * Project: webitto-frontend
 * File Created: Sunday, 3rd May 2020 12:00:33 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 12:44:27 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools-menu',
  templateUrl: './tools-menu.component.html',
  styleUrls: ['./tools-menu.component.scss'],
})
export class ToolsMenuComponent implements OnInit {
  menuItems = [
    {
      link: 'pwa',
      title: 'PWA Assets Generator',
      icon: '../../../../assets/icons/pwa.svg',
    },
    {
      link: 'favicon',
      title: 'Favicon Generator',
      icon: '../../../../assets/icons/favicon.svg',
    },
    {
      link: 'meta-tags',
      title: 'Meta Tags Generator',
      icon: '../../../../assets/icons/meta.svg',
    },
    {
      link: 'webp-converter',
      title: 'WebP Image Converter',
      icon: '../../../../assets/icons/convert.svg',
    },
    {
      link: 'image-resizer',
      title: 'Image Resizer Tool',
      icon: '../../../../assets/icons/resizer.svg',
    },
    {
      link: 'image-optimizer',
      title: 'Image Optimizer Tool',
      icon: '../../../../assets/icons/optimizer.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Cog } from '@primeicons/angular/cog';
import { HeaderTitle } from '../header-title/header-title';

@Component({
  imports: [
    Cog,
    ButtonModule,
    HeaderTitle
  ],
  selector: 'app-menu-bar',
  styleUrl: './menu-bar.scss',
  templateUrl: './menu-bar.html',
})
export class MenuBar {}

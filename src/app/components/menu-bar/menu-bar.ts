import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { User } from '@primeicons/angular/user';
import { HeaderTitle } from '../header-title/header-title';

@Component({
  imports: [
    User,
    ButtonModule,
    HeaderTitle
  ],
  selector: 'app-menu-bar',
  styleUrl: './menu-bar.scss',
  templateUrl: './menu-bar.html',
})
export class MenuBar {}

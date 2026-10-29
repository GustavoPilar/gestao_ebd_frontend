import { Component } from '@angular/core';
import { MenuBar } from '../../components/menu-bar/menu-bar';
import { RouterModule } from '@angular/router';

@Component({
  imports: [
    MenuBar,
    RouterModule
  ],
  selector: 'app-layout',
  styleUrl: './layout.scss',
  templateUrl: './layout.html',
})
export class Layout {}

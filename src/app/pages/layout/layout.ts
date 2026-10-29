import { Component } from '@angular/core';
import { MenuBar } from '../../components/menu-bar/menu-bar';

@Component({
  imports: [
    MenuBar
  ],
  selector: 'app-layout',
  styleUrl: './layout.scss',
  templateUrl: './layout.html',
})
export class Layout {}

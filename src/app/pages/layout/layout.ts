import { Component } from '@angular/core';
import { MenuBar } from '../../components/menu-bar/menu-bar';
import { Book } from '@primeicons/angular/book';

@Component({
  imports: [
    MenuBar,
    Book
  ],
  selector: 'app-layout',
  styleUrl: './layout.scss',
  templateUrl: './layout.html',
})
export class Layout {}

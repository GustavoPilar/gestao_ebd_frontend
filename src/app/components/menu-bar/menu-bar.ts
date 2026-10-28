import { Component } from '@angular/core';
import { Book } from '@primeicons/angular/book';
import { ButtonModule } from 'primeng/button';
import { User } from '@primeicons/angular/user';
import { Bell } from '@primeicons/angular/bell';

@Component({
  imports: [
    Book,
    User,
    Bell,
    ButtonModule
  ],
  selector: 'app-menu-bar',
  styleUrl: './menu-bar.scss',
  templateUrl: './menu-bar.html',
})
export class MenuBar {}

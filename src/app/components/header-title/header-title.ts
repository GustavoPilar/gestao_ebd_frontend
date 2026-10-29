import { Component, input } from '@angular/core';
import { Book } from '@primeicons/angular/book';

@Component({
  imports: [
    Book
  ],
  selector: 'app-header-title',
  styleUrl: './header-title.scss',
  templateUrl: './header-title.html',
})
export class HeaderTitle {
  public readonly color = input<string>('');
  public readonly size = input<string>('50');
}

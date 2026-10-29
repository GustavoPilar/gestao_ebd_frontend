import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArrowRight } from '@primeicons/angular/arrow-right';
import { PIcon } from '@primeicons/angular/p-icon';
import { ButtonModule } from 'primeng/button';

export interface MenuCard {
  title: string,
  description: string,
  icon: string,
  color: string,
  routerLink: string
}

@Component({
  imports: [
    PIcon,
    ButtonModule,
    RouterModule,
    CommonModule,
    ArrowRight
  ],
  selector: 'app-home-card',
  styleUrl: './home-card.scss',
  templateUrl: './home-card.html',
})
export class HomeCard {

  public readonly card = input.required<MenuCard>();

  protected readonly colorText = computed(() => `text-${this.card().color}-700`);
  protected readonly colorBg = computed(() => `bg-${this.card().color}-100`)

}

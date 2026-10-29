import { Component, computed, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HomeCard, MenuCard } from '../../components/home-card/home-card';

@Component({
  imports: [
    ButtonModule,
    HomeCard
  ],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {

  protected readonly currentDate = new Date();

  protected readonly currentDateCustom = computed(() => {
    let dayOfWeek = '';
    const dayOfMonth = this.currentDate.getDay();
    let month = '';

    switch (this.currentDate.getDay()) {
      case 0:
        dayOfWeek = 'Domingo';
        break;
      case 1:
        dayOfWeek = 'Segunda-Feira';
        break;
      case 2:
        dayOfWeek = 'Terça-Feira';
        break;
      case 3:
        dayOfWeek = 'Quarta-Feira';
        break;
      case 4:
        dayOfWeek = 'Quinta-Feira';
        break;
      case 5:
        dayOfWeek = 'Sexta-Feira';
        break;
      default:
        dayOfWeek = 'Sábado';
    }

    switch (this.currentDate.getMonth()) {
      case 0:
        month = 'Janeiro';
        break;
      case 1:
        month = 'Fevereiro';
        break;
      case 2:
        month = 'Março';
        break;
      case 3:
        month = 'Abril';
        break;
      case 4:
        month = 'Maio';
        break;
      case 5:
        month = 'Junho';
        break;
      case 6:
        month = 'Julho';
        break;
      case 7:
        month = 'Agosto';
        break;
      case 8:
        month = 'Setembro';
        break;
      case 9:
        month = 'Outubro';
        break;
      case 10:
        month = 'Novembro';
        break;
      default:
        month = 'Janeiro';
    }

    return `${dayOfWeek}, dia ${dayOfMonth} de ${month}`;
  });

  protected readonly greeting = computed(() => {
    const hours = this.currentDate.getHours();

    if (hours > 18)
      return 'Boa noite';

    if (hours > 12)
      return 'Boa tarde';

    return 'Bom dia';
  });

  protected readonly cards: MenuCard[] = [
    { title: 'Fazer chamada', description: 'Registrar presença das turmas', icon: 'address-book', color: 'green', routerLink: '' },
    { title: 'Relatórios', description: 'Frequência e resultados', icon: 'chart-line', color: 'yellow', routerLink: '' },
    { title: 'Turmas', description: 'Classes, alunos e professores', icon: 'users', color: 'red', routerLink: '' },
    { title: 'Bíblioteca', description: 'Lições, revistas e materiais', icon: 'book', color: 'primary', routerLink: '' },
    { title: 'Membros', description: 'Gerenciais membros da E.B.D', icon: 'user-edit', color: 'purple', routerLink: '' },
  ]
}

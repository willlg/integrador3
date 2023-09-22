import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreDataService } from 'src/app/services/firestore-data.service';
import { Match } from 'src/app/model/match.model';

@Component({
  selector: 'app-tenis',
  templateUrl: './tenis.component.html',
  styleUrls: ['./tenis.component.scss']
})

export class TenisComponentComponent implements OnInit {
  partidas: Match[] = [];
  filteredPartidas: { [key: string]: { [key: string]: Match[] } } = {};
  searchQuery: string = '';
  selectedPartida: Match | null = null;
  statuses: string[] = ['Evento Futuro', 'Ao-Vivo', 'Finalizado'];
  filterStatus: string = '';
  filterChampionship: string = '';
  userNickname: string | null = null;

  constructor(private firestoreDataService: FirestoreDataService, private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.fetchMatches();
    this.authService.getUserData().subscribe(userData => {
      this.userNickname = userData.nickname;
    }, error => {
      console.error('Erro ao buscar os dados do usuário', error);
    });
  }

  fetchMatches(): void {
    this.firestoreDataService.getMatches().subscribe(matches => {
      this.partidas = matches.filter(match => match.sport === 'Tenis');
      this.filterPartidas();
    });
  }

  filterPartidas(): void {
    let filteredList = this.partidas
      .filter(partida => this.filterStatus ? partida.status === this.filterStatus : true)
      .filter(partida => this.filterChampionship ? partida.championshipName.toLowerCase().includes(this.filterChampionship.toLowerCase()) : true);

    if (this.searchQuery) {
      filteredList = filteredList.filter(partida => partida.championshipName.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }

    this.filteredPartidas = filteredList.reduce<{ [status: string]: { [championship: string]: Match[] } }>((acc, partida) => {
      if (!acc[partida.status]) {
        acc[partida.status] = {};
      }
      if (!acc[partida.status][partida.championshipName]) {
        acc[partida.status][partida.championshipName] = [];
      }
      acc[partida.status][partida.championshipName].push(partida);
      return acc;
    }, {});
    
  }

  get filteredPartidasKeys(): string[] {
    return Object.keys(this.filteredPartidas);
  }

  getChampionshipKeys(status: string): string[] {
    return Object.keys(this.filteredPartidas[status]);
  }

  onPartidaClick(partida: any): void {
    if (this.selectedPartida === partida) {
      this.selectedPartida = null;
    } else {
      this.selectedPartida = partida;
    }
  }
  

  onLogout(): void {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error('Erro ao deslogar', error);
    });
  }

  navigateToProfile(): void {
    this.router.navigate(['/perfil']);
  }

  navigateToTelaInicial(): void {
    this.router.navigate(['/tela-inicial']);
  }
}


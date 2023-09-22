import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirestoreDataService } from 'src/app/services/firestore-data.service';

@Component({
  selector: 'app-admin-crud-partidas',
  templateUrl: './admin-crud-partidas.component.html',
  styleUrls: ['./admin-crud-partidas.component.scss']
})

export class AdminCrudPartidasComponent implements OnInit {
  sports: string[] = ['Baseball', 'Basquete', 'Tenis', 'Futebol'];
  phases: string[] = ['Fase Regular', 'Playoffs'];
  filterSport: string = '';
  filterStatus: string = '';
  playoffPhases: string[] = ['Oitavas-de-final', 'Quartas-de-Final', 'Semi-Final', 'Final'];
  statuses: string[] = ['Evento Futuro', 'Ao-Vivo', 'Finalizado'];
  showPlayoffPhases: boolean = false;
  showCreateForm: boolean = false;
  showMatchList: boolean = false;
  showEditForm: boolean = false;
  matches: any[] = [];
  matchToEdit: any = {
    phase: null,
  };
  
  constructor(private firestoreDataService: FirestoreDataService) { }

  ngOnInit(): void {
    this.fetchMatches();
  }

  onPhaseSelect(event: any): void {
    this.showPlayoffPhases = event.target.value === 'Playoffs';
  }

  fetchMatches(): void {
    this.firestoreDataService.getMatches().subscribe(data => {
      this.matches = data;
      console.log(data);
    });
  }
  
  onCreateMatch(form: NgForm): void {
    this.firestoreDataService.createMatch(form.value).then(() => {
      this.fetchMatches();
    }).catch(error => {
      console.error('Error creating match: ', error);
    });
  }

  onEditMatch(match: any): void {
    this.matchToEdit = { ...match, id: match.id };
    this.showCreateForm = false;
    this.showMatchList = false;
    this.showEditForm = true;
  }
  

  onUpdateMatch(form: NgForm): void {
    if (this.matchToEdit) {
      this.firestoreDataService.updateMatch(this.matchToEdit.id, form.value).then(() => {
        this.fetchMatches();
        this.matchToEdit = null;
      }).catch(error => {
        console.error('Error updating match: ', error);
      });
    }
  }

  onDeleteMatch(match: any): void {
    this.firestoreDataService.deleteMatch(match.id).then(() => {
      this.fetchMatches();
    }).catch(error => {
      console.error('Error deleting match: ', error);
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreDataService } from 'src/app/services/firestore-data.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})

export class PerfilComponent {
  userData: any = {};
  errorMessage: string | null = null;
  userNickname: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private firestoreDataService: FirestoreDataService,

  ) { }

  ngOnInit(): void {
    this.authService.getUserData().subscribe(
        data => {
            this.userData = data;
        },
        error => {
            console.error('Error fetching user data', error);
            this.errorMessage = 'Erro ao carregar os dados do usuário';
        }
    );
}

  
  onEdit(): void {
    if (this.userData) {
      from(this.authService.updateUserProfile(this.userData)).subscribe(
        response => {
          console.log('Perfil atualizado!', response);
          this.router.navigate(['/tela-inicial']); 
        },
        error => {
          console.error('Falha ao atualizar perfil', error);
        }
      );
    } else {
      this.errorMessage = 'Dados do usuário não disponíveis';
    }
  }
  
  onDelete(): void {
    this.authService.deleteUser().subscribe(
      () => {
        this.errorMessage = null;
        this.router.navigate(['/tela-inicial']);
      },
      error => {
        this.errorMessage = 'Erro ao excluir o perfil';
        console.error('Erro ao excluir o perfil:', error);
      }
    );
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

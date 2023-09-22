import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../../services/auth.service";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { NgForm } from "@angular/forms";
import { of, switchMap } from "rxjs";
import { Router } from "@angular/router";

// prognostico.component.ts
@Component({
  selector: 'app-basquete-prognosticos',
  templateUrl: './basquete-prognosticos.component.html',
  styleUrls: ['./basquete-prognosticos.component.scss']
})

export class BasquetePrognosticosComponent implements OnInit {
  currentUser: any = null;
  prognosticos: any[] = [];
  editingPrognostico: any = null;
  prognosticoFormModel: any = {};
  userNickname: string | null = null;
  showModal = false;

  constructor(private firestore: AngularFirestore, private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.authService.getUserData().pipe(
      switchMap(userData => {
        this.currentUser = userData;
        if (this.currentUser?.userType === 'usuario' || this.currentUser?.userType === 'jornalista') {
          return this.authService.getPrognosticos();
        } else {
          return of(null);
        }
      })
    ).subscribe(prognosticosData => {
      if (prognosticosData) {
        this.prognosticos = prognosticosData;
      }
    });
    this.authService.getUserData().subscribe(userData => {
      this.userNickname = userData.nickname;
    }, error => {
      console.error('Erro ao buscar os dados do usuário', error);
    });
  }
  
  postPrognostico(form: NgForm): void {
    if (this.currentUser?.userType === 'jornalista') {
      if (form.valid) {
        const prognosticoData = form.value;

        if (this.editingPrognostico) {
          this.firestore.collection('prognosticos').doc(this.editingPrognostico.id).update(prognosticoData)
            .then(() => {
              console.log('Prognóstico editada com sucesso!');
              this.editingPrognostico = null;
              this.prognosticoFormModel = {};
              form.reset();
            })
            .catch(error => {
              console.error('Erro ao editar prognóstico:', error);
            });
        } else {
          this.firestore.collection('prognosticos').add(prognosticoData)
            .then(() => {
              console.log('Prognóstico postada com sucesso!');
              this.prognosticoFormModel = {}; 
              form.reset();
            })
            .catch(error => {
              console.error('Erro ao postar prognóstico:', error);
            });
        }
      }
    }
  }

  editPrognostico(prognostico: any): void {
    this.editingPrognostico = prognostico;
    this.prognosticoFormModel = { ...prognostico };
    this.showModal = true;
  }  

  deletePrognostico(prognosticoId: string): void {
    this.firestore.collection('prognosticos').doc(prognosticoId).delete()
      .then(() => {
        console.log('Prognostico excluído com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao excluir prognostico:', error);
      });
  }  

  openModal() {
    this.showModal = true;
  }
  
  closeModal() {
    this.prognosticoFormModel = {};
    this.showModal = false;
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

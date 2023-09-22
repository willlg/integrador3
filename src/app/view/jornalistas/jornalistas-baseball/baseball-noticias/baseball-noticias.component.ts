import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../../services/auth.service";
import { NgForm } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { of, switchMap } from "rxjs";
import { Router } from "@angular/router";

// noticia.component.ts
@Component({
  selector: 'app-baseball-noticias',
  templateUrl: './baseball-noticias.component.html',
  styleUrls: ['./baseball-noticias.component.scss']
})
export class BaseballNoticiasComponent implements OnInit {
  currentUser: any = null;
  noticias: any[] = [];
  editingNoticia: any = null;
  noticiaFormModel: any = {};
  userNickname: string | null = null;
  ultimasNoticias: any[] = [];
  currentNewsIndex = 0;
  showModal = false;

  constructor(private firestore: AngularFirestore, private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.authService.getUserData().pipe(
      switchMap(userData => {
        this.currentUser = userData;
        if (this.currentUser?.userType === 'usuario' || this.currentUser?.userType === 'jornalista') {
          return this.authService.getNoticias();
        } else {
          return of(null);
        }
      })
    ).subscribe(noticiasData => {
      if (noticiasData) {
        this.noticias = noticiasData;
        this.noticias.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
        this.ultimasNoticias = this.noticias.filter(noticia => noticia.esporte === 'Baseball').slice(0, 5);
      }
    });
    this.authService.getUserData().subscribe(userData => {
      this.userNickname = userData.nickname;
    }, error => {
      console.error('Erro ao buscar os dados do usuário', error);
    });
  setInterval(() => {
    this.currentNewsIndex = (this.currentNewsIndex + 1) % this.ultimasNoticias.length;
  }, 10000);
  }

  setCurrentNewsIndex(index: number) {
    this.currentNewsIndex = index;
  }
  
  openModal() {
    this.showModal = true;
  }
  
  closeModal() {
    this.noticiaFormModel = {};
    this.showModal = false;
  }
  
  postNoticia(form: NgForm): void {
    if (this.currentUser?.userType === 'jornalista') {
      if (form.valid) {
        const noticiaData = { ...form.value, data: new Date() };
        

        if (this.editingNoticia) {
          this.firestore.collection('noticias').doc(this.editingNoticia.id).update(noticiaData)
            .then(() => {
              console.log('Notícia editada com sucesso!');
              this.editingNoticia = null;
              this.noticiaFormModel = {};
              form.reset();
            })
            .catch(error => {
              console.error('Erro ao editar notícia:', error);
            });
        } else {
          this.firestore.collection('noticias').add(noticiaData)
            .then(() => {
              console.log('Notícia postada com sucesso!');
              this.noticiaFormModel = {}; 
              form.reset();
            })
            .catch(error => {
              console.error('Erro ao postar notícia:', error);
            });
        }
      }
    }
  }

  editNoticia(noticia: any): void {
    this.editingNoticia = noticia;
    this.noticiaFormModel = { ...noticia, data: new Date(noticia.data) };
    this.showModal = true;
  }  

  deleteNoticia(noticiaId: string): void {
    this.firestore.collection('noticias').doc(noticiaId).delete()
      .then(() => {
        console.log('Notícia excluída com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao excluir notícia:', error);
      });
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

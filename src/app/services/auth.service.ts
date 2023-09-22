import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthData } from '../model/auth-data.model';
import { Observable, from, map, of, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  currentUser: any;

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) { 
    this.afAuth.authState.subscribe(user => {
      this.currentUser = user;
    });
  }

  register(authData: AuthData) {
    return this.afAuth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        if (result.user) {
          return this.firestore.collection('users').doc(result.user.uid).set({
            email: authData.email,
            fullName: authData.fullName,
            nickname: authData.nickname,
            birthDate: authData.birthDate,
            favoriteTeam: authData.favoriteTeam,
            userType: authData.userType
          });
        } 
        else {
          throw new Error('Usuário não foi criado');
        }
      })
      .catch(error => {
        console.error('Erro no registro:', error);
        throw error;
      });
  } 

  login(email: string, password: string): Promise<void> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('Login bem suscedido!', userCredential);
      })
      .catch(error => {
        console.error('Login falhou', error);
        throw error;
      });
  }


  logout(): Promise<void> {
  return this.afAuth.signOut();
  }

  getUserData(): Observable<any> {
    return this.afAuth.authState.pipe(
        switchMap(user => {
            if (user) {
                return this.firestore.collection('users').doc(user.uid).valueChanges();
            } else {
                return of(null);
            }
        })
    );
  }

  updateUserProfile(data: any) {
    if(this.currentUser) {
      return this.firestore.collection('users').doc(this.currentUser.uid).update(data);
    } else {
      return throwError('Usuario nao logado');
    }
  }

  deleteUser() {
    if(this.currentUser) {
      return from(this.currentUser.delete()).pipe(
        switchMap(() => {
          return this.firestore.collection('users').doc(this.currentUser.uid).delete();
        })
      );
    } else {
      return throwError('Usuario nao logado');
    }
  }

  getNoticias(): Observable<any[]> {
    return this.firestore.collection('noticias').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as {};
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  
  getPrognosticos(): Observable<any[]> {
    return this.firestore.collection('prognosticos').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as {};
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }  
}

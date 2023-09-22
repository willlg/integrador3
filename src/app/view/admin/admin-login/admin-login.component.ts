import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})

export class AdminLoginComponent {

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  adminLogin(credentials: any) {
    this.afAuth.signInWithEmailAndPassword(credentials.username, credentials.password)
      .then((result) => {
        this.router.navigate(['/admin-crud-partidas']);
      })
      .catch((error) => {
        alert('Credenciais inválidas!');
        console.error(error.message);
      });
  }
}

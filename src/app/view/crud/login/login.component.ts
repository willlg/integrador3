import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  errorMessage: string | null = null;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const { email, password } = form.value;
      this.authService.login(email, password)
        .then(() => {
          this.errorMessage = ''; 
          this.router.navigate(['/tela-inicial']); 
        })
        .catch(error => {
          this.errorMessage = "O login falhou, verifique e-mail e senha e tente novamente!";
          console.error('Login failed', error);
        });
    } else {
      this.errorMessage = "Formulário inválido";
    }
  }

  onRegister(): void {
    this.router.navigate(['/register']);
  }
}

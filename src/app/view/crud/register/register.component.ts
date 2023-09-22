import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if(!form.valid) {
      this.errorMessage = "Por favor, preencha todos os campos";
      return;
    }
    
    const emailPattern = /^[qwertyuioplkjhgfdsazxcvbnm_1234567890.]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if(!emailPattern.test(form.value.email)) {
      this.errorMessage = "O formato do email é inválido";
      return;
    }

    if(form.value.password !== form.value.confirmPassword) {
      this.errorMessage = "As senhas não coincidem";
      return;
    }

    this.authService.register(form.value)
      .then(response => {
        console.log('Registration successful!', response);
        this.errorMessage = null;
        this.successMessage = "Sucesso no cadastro";
      })
      .catch(error => {
        console.error('Registration failed', error);
        this.errorMessage = "O registro falhou";
      });
  }

  onLogin(): void {
    this.router.navigate(['/login']);
  }
}

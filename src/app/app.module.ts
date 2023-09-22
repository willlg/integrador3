import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AdminLoginComponent } from './view/admin/admin-login/admin-login.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminCrudPartidasComponent } from './view/admin/admin-crud-partidas/admin-crud-partidas.component';
import { TelaInicialComponent } from './view/tela-inicial/tela-inicial.component';
import { MatchFilterPipe } from './MatchFilterPipe';
import { RegisterComponent } from './view/crud/register/register.component';
import { LoginComponent } from './view/crud/login/login.component';
import { PerfilComponent } from './view/crud/perfil/perfil.component';
import { BaseballComponent } from './view/esportes/baseball/baseball.component';
import { HttpClientModule } from '@angular/common/http';
import { FutebolComponent } from './view/esportes/futebol/futebol.component';
import { BasqueteComponent } from './view/esportes/basquete/basquete.component';
import { TenisComponentComponent } from './view/esportes/tenis/tenis.component';
import { BaseballNoticiasComponent } from './view/jornalistas/jornalistas-baseball/baseball-noticias/baseball-noticias.component';
import { BaseballPrognosticosComponent } from './view/jornalistas/jornalistas-baseball/baseball-prognosticos/baseball-prognosticos.component';
import { TenisNoticiasComponent } from './view/jornalistas/jornalistas-tenis/tenis-noticias/tenis-noticias.component';
import { TenisPrognosticosComponent } from './view/jornalistas/jornalistas-tenis/tenis-prognosticos/tenis-prognosticos.component';
import { FutebolPrognosticosComponent } from './view/jornalistas/jornalistas-futebol/futebol-prognosticos/futebol-prognosticos.component';
import { FutebolNoticiasComponent } from './view/jornalistas/jornalistas-futebol/futebol-noticias/futebol-noticias.component';
import { BasqueteNoticiasComponent } from './view/jornalistas/jornalistas-basquete/basquete-noticias/basquete-noticias.component';
import { BasquetePrognosticosComponent } from './view/jornalistas/jornalistas-basquete/basquete-prognosticos/basquete-prognosticos.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminCrudPartidasComponent,
    TelaInicialComponent,
    MatchFilterPipe,
    RegisterComponent,
    LoginComponent,
    PerfilComponent,
    FutebolComponent,
    BasqueteComponent,
    TenisComponentComponent,
    BaseballComponent,
    BaseballPrognosticosComponent,
    BaseballNoticiasComponent,
    TenisNoticiasComponent,
    TenisPrognosticosComponent,
    FutebolPrognosticosComponent,
    FutebolNoticiasComponent,
    BasqueteNoticiasComponent,
    BasquetePrognosticosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

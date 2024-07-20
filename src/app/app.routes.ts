import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'consulta', component: ConsultaComponent },
];

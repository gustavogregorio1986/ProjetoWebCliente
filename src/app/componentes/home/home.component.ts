import { Component } from '@angular/core';
import { RodapeComponent } from "../rodape/rodape.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RodapeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  dedicacao = 'https://jrmcoaching.com.br/wp-content/uploads/2021/04/dedicacao-e-persistencia-capa.jpg'
  altDedicacao = 'dedicação para prosperar'
}

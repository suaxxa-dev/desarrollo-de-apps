import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DogService } from './services/dog.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  nombrePokemon: string ='';
  pokemon: any;

  constructor(private apiservice: DogService) {}
    
  buscar(){
    this.apiservice.buscarPokemon(this.nombrePokemon).subscribe((data:any) => {
      this.pokemon = data;
    });
  }
  title = 'pokeapi';
}

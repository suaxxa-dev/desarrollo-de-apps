import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  peliculas: any;
  peliculaSeleccionada:any = null;
  misPeliculas:any[] = [];

  constructor(private dataService: DataService) {}

  // ✅ Aquí se carga localStorage
  ngOnInit(){
    this.peliculas = this.dataService.obtenerPeliculas(); 
    this.misPeliculas = this.dataService.obtenerGuardadas();
  }

  verDetalle(pelicula:any){
    this.peliculaSeleccionada = pelicula;
  }

  volver(){
    this.peliculaSeleccionada = null;
  }

  guardar(pelicula:any){
    this.dataService.guardarPelicula(pelicula);
    this.misPeliculas = this.dataService.obtenerGuardadas();
  }

}

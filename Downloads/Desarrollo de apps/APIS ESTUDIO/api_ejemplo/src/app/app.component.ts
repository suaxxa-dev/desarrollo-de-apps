import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  implements OnInit {

  gatos: any[] = [];

  constructor(private apiservice: ApiService){}

 ngOnInit(){
  this.cargarGatos();
 }
  


  cargarGatos(){
    this.apiservice.getCats().subscribe((data: any) => {
      this.gatos = data;
    });
  }
}
  

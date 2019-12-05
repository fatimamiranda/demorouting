import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CancionService } from 'src/app/services/cancion.service';
import { Cancion } from 'src/app/model/cancion';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})

export class Compo1Component implements OnInit {

  cancion:Cancion = undefined;

  constructor(private router:Router, private cancionService:CancionService) {
 
   }

  ngOnInit() {

    this.cancion = this.cancionService.read(100);
    console.log(this.cancion)
  }


  navegar():void {
    console.log("nos vamos al componente 2!")
    this.router.navigateByUrl('/compo2')
  }
}

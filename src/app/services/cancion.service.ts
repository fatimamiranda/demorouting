import { Cancion } from '../model/cancion';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root',
})
export class CancionService{

    getAll():Cancion[]{
        return null;
    }

    create(cancion:Cancion):void{
       
    }

    read(codigo:number):Cancion{
        console.log("hola")
        let cancion= new Cancion(codigo, "Descpacito", "Pedro Perales", true, new Date(1800,1,5));
        console.log(cancion)
        return cancion;
    }
    
}
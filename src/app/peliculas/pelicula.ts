import { model } from "@angular/core";

export class Pelicula {
    nombrePelicula:string;
    duracion:string;
    genero:string;
    fechaEstreno:string;
    pais:string;
    id:number;


    public constructor(id:number,nombrePelicula:string,duracion:string,genero:string,fechaEstreno:string,pais:string){
        this.id=id;
        this.nombrePelicula=nombrePelicula;
        this.duracion=duracion;
        this.genero=genero;
        this.fechaEstreno=fechaEstreno;
        this.pais=pais;
    }
}
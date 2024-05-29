import { model } from "@angular/core";

export class Serie {
    
    nombreSerie:string;
    duarcion:string;
    genero:string;
    fechaEstreno:string;
    pais:string;


    public constructor(nombreSerie:string,duarcion:string,genero:string,fechaEstreno:string,pais:string){
        this.nombreSerie=nombreSerie;
        this.duarcion=duarcion;
        this.genero=genero;
        this.fechaEstreno=fechaEstreno;
        this.pais=pais;

    }
}
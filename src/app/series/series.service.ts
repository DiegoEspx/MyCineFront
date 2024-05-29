import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Serie } from './serie';

const API_URL='http://127.0.0.1:8000/api/vehiculos/crear-vehiculo'

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

constructor(private http:HttpClient) { }

  obtenerVehiculos():Observable<Serie[]>{
    return this.http.get<Serie[]>(API_URL);
  }

  crearVehiculo(serie:Serie):Observable<Serie>{
    return this.http.post<Serie>(API_URL, serie)
  }

  obtenerVehiculo(id:Number):Observable<Serie>{
    return this.http.get<Serie>('http://127.0.0.1:8000/api/vehiculos/'+'consultar/'+id);
  }


  editarVehiculo(serie:Serie, idVehiculo:number):Observable<Serie>{

    return this.http.put<Serie>('http://127.0.0.1:8000/api/vehiculos/actualizar-vehiculo/'+idVehiculo, vehiculo)
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';  // URL del backend

  constructor(private http: HttpClient) {}
    //creamos un contrcutor haciendo referencia a manejo de protocolo http
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
    //Para realizar un endpoint y poder acceder a la data, llamamos el URL del backend y le aumentamos el endpoint de esta manera
    //tendremos conectado el back + base datos al front , http.get indica que estaremos eligiendo una ruta
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { trackRequestResult } from '@ngneat/elf-requests';
import { Verse, BibleRepository } from './bible.repository';

@Injectable({
  providedIn: 'root',
})
export class BibleService {
  constructor(private http: HttpClient, private bibleRepo: BibleRepository) {}

  // Método para agregar una nueva consulta
  agregarConsulta(verse: Verse){
    console.log('Creando consulta desde el servicio');
    return this.http
      .get(`http://192.168.1.3:8080/api/v1/bible/verse?book=${verse.libro}&chapter=${verse.capitulo}&verse=${verse.versiculo}`)
      .pipe(
        map((response) => this.transformarRespuesta(response)),
        tap((verse) => {
          this.bibleRepo.addVerse(verse);
          console.log(verse);
        }),
        trackRequestResult(['verse'])
      );
  }

  // Resto de tus métodos aquí

  private transformarRespuesta(response: any): Verse {
    console.log('Transformando respuesta');
    // Realiza la transformación de la respuesta al formato deseado (Verse)
    return {
      id: response.id,
      libro: response.book,
      capitulo: parseInt(response.chapter, 10), // Convierte a número entero
      versiculo: parseInt(response.verse, 10), // Convierte a número entero
      texto: response.text,
      fechaConsulta: new Date(response.date) 
    };
  }
}

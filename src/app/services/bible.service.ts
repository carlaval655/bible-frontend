import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { trackRequestResult } from '@ngneat/elf-requests';
import { Verse, BibleRepository} from './bible.repository';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class BibleService {
  private http = inject(HttpClient);
  private bibleRepo = inject(BibleRepository);

  constructor() { }

  // Método para agregar una nueva consulta
  agregarConsulta(verse: Verse){
    console.log('Creando consulta desde el servicio');
    return this.http
  .get<Verse>(`http://192.168.1.3:8080/api/v1/bible/verse?book=${verse.libro}&chapter=${verse.capitulo}&verse=${verse.versiculo}`)
  .pipe(
    tap((result) => {
      // Imprimir el resultado de la solicitud por consola
      console.log('Resultado de la solicitud:', result);
    })
  );
  }
/* 
  eliminarConsulta(id : number) {
    const verses = this.versesSubject.getValue();
    const index = verses.findIndex((verse: { id: number; }) => verse.id === id);
    verses.splice(index, 1);
    this.versesSubject.next(verses);
  }

  modificarConsulta(verse: Verse) {
    const verses = this.versesSubject.getValue();
    const index = verses.findIndex((v: { id: number; }) => v.id === verse.id);
    verses[index] = verse;
    this.versesSubject.next(verses);
  }

  mostrarConsulta(id: number) {
    const verses = this.versesSubject.getValue();
    const index = verses.findIndex((verse: { id: number; }) => verse.id === id);
    return verses[index];
  } */

  mostrarConsultas() {
    return this.http
      .get<Verse[]>('http://192.168.1.3:8080/api/v1/bible/request')
      .pipe(
        tap((verses) => this.bibleRepo.setVerses(verses)),
        trackRequestResult(['verses'])
      );

  }

  private transformarRespuesta(response: any): Verse {
    // Realiza la transformación de la respuesta al formato deseado (Verse)
    return {
      id: null, // Puedes asignar un valor si tienes un sistema de ID
      libro: response.verses[0].book_name,
      capitulo: response.verses[0].chapter,
      versiculo: response.verses[0].verse,
      texto: response.verses[0].text,
      fechaConsulta: new Date() // Asigna la fecha de consulta según tus requerimientos
    };
  }


}
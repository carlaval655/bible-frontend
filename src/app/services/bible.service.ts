import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { trackRequestResult } from '@ngneat/elf-requests';
import { BibleRepository } from './bible.repository';
import { Verse } from '../models/Verse'

@Injectable({
  providedIn: 'root',
})
export class BibleService {
  constructor(private http: HttpClient, private bibleRepo: BibleRepository) {}

  // Método para agregar una nueva consulta
  agregarConsulta(libro: string, capitulo: number, versiculo: number): Observable<Verse> {
    console.log('Agregando consulta');
    return this.http.get<Verse>(`http://192.168.0.104:8080/api/v1/bible/verse?book=${libro}&chapter=${capitulo}&verse=${versiculo}`)
      .pipe(
        //map((response) => this.transformarRespuesta(response)),
        tap((verse) => {
          //this.bibleRepo.addVerse(verse);
          console.log('CONSULTA AGREGADA');
          console.log(verse);
        }),
      );
  }
}

import { Component, inject } from '@angular/core';
import { BibleRepository, Verse} from 'src/app/services/bible.repository';
import { BibleService } from 'src/app/services/bible.service';


@Component({
  selector: 'app-consulta-search',
  templateUrl: './consulta-search.component.html',
  styleUrls: ['./consulta-search.component.css']
})
export class ConsultaSearchComponent {
  bibleService: BibleService = inject(BibleService);
  verses$ = inject(BibleRepository).verses$;
verses: Verse[] = [];
  verse: Verse = {
    id: 9,
    libro: '',
    capitulo: 0,
    versiculo: 0,
    texto: '',
    fechaConsulta: new Date()

  };
    constructor() { }
  
    ngOnInit(): void {
    }

    crearConsulta() {
      console.log('Creando consulta desde el componente');
      console.log(this.verse);
      this.bibleService.agregarConsulta(this.verse);

    }

}

import { Component, Inject, inject } from '@angular/core';
import { BibleRepository} from 'src/app/services/bible.repository';
import { BibleService } from 'src/app/services/bible.service';
import { Verse } from 'src/app/models/Verse';


@Component({
  selector: 'app-consulta-search',
  templateUrl: './consulta-search.component.html',
  styleUrls: ['./consulta-search.component.css']
})
export class ConsultaSearchComponent {
  private bibleService= inject(BibleService)
    private bibleRepository= inject(BibleRepository)
  verses = this.bibleRepository.verses$
    libro= "";
    capitulo= 0
    versiculo= 0
    texto= "" as any;

    ngOnInit(): void {
    }

    crearConsulta() {
      console.log('Creando consulta desde el componente');
      this.bibleService.agregarConsulta(this.libro, this.capitulo,this.versiculo).subscribe(
        (response) => {
          console.log(response);
          this.texto = response.text;
          //this.verse.texto = response.texto;
          
        },
        (error) => {
          console.log(error);
        }
      );

    }


}

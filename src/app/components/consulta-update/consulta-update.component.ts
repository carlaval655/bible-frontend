import { Component, inject } from '@angular/core';
import { BibleRepository } from 'src/app/services/bible.repository';
import { BibleService } from 'src/app/services/bible.service';

@Component({
  selector: 'app-consulta-update',
  templateUrl: './consulta-update.component.html',
  styleUrls: ['./consulta-update.component.css']
})
export class ConsultaUpdateComponent {

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

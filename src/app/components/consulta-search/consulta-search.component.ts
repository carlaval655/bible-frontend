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
  private versesMemento: any = [];
    currentIndex = -1;
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
          this.versesMemento.push({ libro: this.libro, capitulo: this.capitulo, versiculo: this.versiculo, texto: this.texto });
          console.log(this.versesMemento);
          this.currentIndex = this.versesMemento.length - 1;
          
        },
        (error) => {
          console.log(error);
        }
      );

    }

    cargarAnterior() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        console.log("Imprimiendo posicion:"+this.currentIndex);
        const consultaAnterior = this.versesMemento[this.currentIndex];
        this.libro = consultaAnterior.libro;
        this.capitulo = consultaAnterior.capitulo;
        this.versiculo = consultaAnterior.versiculo;
        this.texto = consultaAnterior.texto;
     }
      //this.habilitarBotones();
    }
  
    cargarSiguiente() {
      if (this.currentIndex < this.versesMemento.length - 1) {
        this.currentIndex++;
        console.log("Imprimiendo posicion:"+this.currentIndex);
        const consultaSiguiente = this.versesMemento[this.currentIndex];
        this.libro = consultaSiguiente.libro;
        this.capitulo = consultaSiguiente.capitulo;
        this.versiculo = consultaSiguiente.versiculo;
        this.texto = consultaSiguiente.texto;
      }
      //this.habilitarBotones();
    }
    
    // habilitarBotones() {
    //   const anterior = document.getElementById('anterior');
    //   const siguiente = document.getElementById('siguiente');
    //   if (this.currentIndex === 0) {
    //     anterior?.setAttribute('disabled', 'true');
    //   } else {
    //     anterior?.removeAttribute('disabled');
    //   }
    //   if (this.currentIndex === this.versesMemento.length - 1) {
    //     siguiente?.setAttribute('disabled', 'true');
    //   } else {
    //     siguiente?.removeAttribute('disabled');
    //   }
    // }
}
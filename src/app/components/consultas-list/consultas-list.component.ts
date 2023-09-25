import { Component, inject, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import { BibleRepository } from 'src/app/services/bible.repository';
import { BibleService } from 'src/app/services/bible.service';
import {MatTableDataSource} from "@angular/material/table";
import { Verse } from 'src/app/models/Verse';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-consultas-list',
  templateUrl: './consultas-list.component.html',
  styleUrls: ['./consultas-list.component.css']
})
export class ConsultasListComponent {

  title = 'software';
  test = 'prueba';
  page = 0;
  size = 10;
  sort = "id";
  asc = true;

  isFirst = false;
  isLast = false;
  bibleService = inject(BibleService);
  bibleRepository = inject(BibleRepository);
  

  dataSource: MatTableDataSource<Verse> = new MatTableDataSource<Verse>([]);
  displayedColumns: string[] = ['id', 'book', 'chapter', 'verse', 'text', 'date'];
  verses$ = this.bibleRepository.verses$;

  // MatPaginator Inputs
  maxSize: number= 0;
  isLoading: boolean = false;
  pageIndex: number = 0;
  constructor() {
    this.bibleService.obtenerConsultas(0, 5).subscribe();
  }

  ngOnInit() {
    this.verses$
      .subscribe((response) => {
        console.log(response);
        const verseProps = this.bibleRepository.getVerseProps();
        this.maxSize = Number(verseProps.totalElements);
        this.isLoading = response.isLoading;
        this.dataSource.data =  response.data;
      });
  }
  retroceder(){
    if(this.page > 0){
      this.page--;
      this.bibleService.obtenerConsultas(this.page, 5).subscribe();
    }
  }

  avanzar(){
    if(!this.isLast){
      this.page++;
      this.bibleService.obtenerConsultas(this.page, 5).subscribe();
    }
  }
}

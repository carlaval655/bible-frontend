import { Component, inject, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import { BibleRepository } from 'src/app/services/bible.repository';
import { BibleService } from 'src/app/services/bible.service';
import {MatTableDataSource} from "@angular/material/table";
import { Verse } from 'src/app/models/Verse';
@Component({
  selector: 'app-consultas-list',
  templateUrl: './consultas-list.component.html',
  styleUrls: ['./consultas-list.component.css']
})
export class ConsultasListComponent {
  bibleService = inject(BibleService);
  bibleRepository = inject(BibleRepository);
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Verse> = new MatTableDataSource<Verse>([]);
  displayedColumns: string[] = ['id', 'book', 'chapter', 'verse', 'text', 'date'];
  verses$ = this.bibleRepository.verses$;
  maxSize: number= 0;
  isLoading: boolean = false;
  constructor() {
    this.bibleService.obtenerConsultas().subscribe();
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

  pageChangeEvent($event: PageEvent) {
    console.log($event);
    //this.bibleService.obtenerConsultas($event.pageIndex, 5).subscribe();
    this.bibleService.obtenerConsultas().subscribe();

  }
}

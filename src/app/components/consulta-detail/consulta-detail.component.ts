import { Component, inject, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import { BibleRepository } from 'src/app/services/bible.repository';
import { BibleService } from 'src/app/services/bible.service';
import {MatTableDataSource} from "@angular/material/table";
import { Verse } from 'src/app/models/Verse';
@Component({
  selector: 'app-consulta-detail',
  templateUrl: './consulta-detail.component.html',
  styleUrls: ['./consulta-detail.component.css']
})
export class ConsultaDetailComponent {
  bibleService = inject(BibleService);
  bibleRepository = inject(BibleRepository);
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Verse> = new MatTableDataSource<Verse>([]);
  displayedColumns: string[] = ['id', 'book', 'chapter', 'verse', 'text', 'date'];
  verse = this.bibleRepository.getVerse(1);
  maxSize: number= 0;
  isLoading: boolean = false;
  constructor() {
  }

  ngOnInit() {
  }

  consultar() {
    this.verse = this.bibleRepository.getVerse(1);  }

}

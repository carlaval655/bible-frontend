import { Injectable } from '@angular/core';
import { createStore, withProps } from '@ngneat/elf';
import {
  selectAllEntities,
  selectEntity,
  setEntities,
  upsertEntities,
  withEntities,
} from '@ngneat/elf-entities';
import { joinRequestResult } from '@ngneat/elf-requests';
import { Verse } from '../models/Verse';
import { state } from '@angular/animations';

export interface VerseProps{
  totalElements: number;
  totalPages: number;
  currentPage: number;
}

const store = createStore(
  { name: 'verses' }, 
  withProps<VerseProps>({ totalElements: 0, totalPages: 0, currentPage: 0}),
  withEntities<Verse>()
  );

@Injectable({ providedIn: 'root' })
export class BibleRepository {
  verses$ = store.pipe(selectAllEntities(), joinRequestResult(['verses']));

  getVerseProps() {
    return store.query(state => state);
  }

  getVerse(id: Verse['id']) {
    return store.pipe(selectEntity(id), joinRequestResult(['verses', id]));
  }

  addVerse(verse: Verse) {
    store.update(upsertEntities(verse));
  }

  updateVerse(verse: Verse) {
    store.update(upsertEntities(verse));
  }

  deleteVerse(id: Verse['id']) {
    store.update(upsertEntities({ id}));
  }

  getAllVerses() {
    return store.pipe(selectAllEntities());
  }

  setVerses(verses: Verse[]) {
    store.update(setEntities(verses));
  }




}
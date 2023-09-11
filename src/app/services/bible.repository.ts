import { Injectable } from '@angular/core';
import { createStore } from '@ngneat/elf';
import {
  selectAllEntities,
  selectEntity,
  setEntities,
  upsertEntities,
  withEntities,
} from '@ngneat/elf-entities';
import { joinRequestResult } from '@ngneat/elf-requests';
import { Verse } from '../models/Verse';

const store = createStore({ name: 'verses' }, withEntities<Verse>());

@Injectable({ providedIn: 'root' })
export class BibleRepository {
  verses$ = store.pipe(selectAllEntities(), joinRequestResult(['verses']));

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
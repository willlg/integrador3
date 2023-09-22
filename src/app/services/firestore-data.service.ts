import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Match } from '../model/match.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FirestoreDataService {

  constructor(private firestore: AngularFirestore) { }

  createMatch(match: Match) {
    return this.firestore.collection('matches').add(match);
  }

  getMatches() {
    return this.firestore.collection('matches').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Match;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  
  updateMatch(id: string, match: Match) {
    return this.firestore.collection('matches').doc(id).update(match);
  }

  deleteMatch(id: string) {
    return this.firestore.collection('matches').doc(id).delete();
  }
}

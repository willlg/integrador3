import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirestoreDataService {

  constructor(private firestore: AngularFirestore) { }

  createUser(data: any): Promise<any> {
    return this.firestore.collection('users').add(data);
  }

  createJournalist(data: any): Promise<any> {
    return this.firestore.collection('journalists').add(data);
  }
  
  createChampionship(data: any): Promise<any> {
    return this.firestore.collection('championships').add(data);
  }

  getChampionships(): any {
    return this.firestore.collection('championships').snapshotChanges();
  }
}

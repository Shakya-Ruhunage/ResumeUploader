import { Component, OnInit } from '@angular/core';
import { Entree } from '../entree.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { SearchQueryBuilder } from './searchQueryBuilder.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  entree: Entree = new Entree();
  options = ['Select an Option','Sales','Human Resources','IT','Law','Other'];

  constructor(private _db: AngularFirestore) { }

  ngOnInit() {
  }

  public search() {
    console.log('jsifjwfiwhgiw', this.entree);

    let searchQueryBuilder: SearchQueryBuilder = new SearchQueryBuilder();

    let some = this._db.collection('entries',
      ref => searchQueryBuilder.queryBuilder(ref, this.entree))
      .snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return data;
        }))).subscribe((value) => {
          console.log('value', value)
        });

   



    // let start: string = 'Roshen';
    // let end = start+'\uf8ff';

    // this._db.collection('entries', ref=> 
    //   ref.orderBy('lname').limit(5).startAt(start).endAt(end)).valueChanges().subscribe(value => {
    //     console.log(value, 'value');
    //   });


  }

}

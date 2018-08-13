import { Component, OnInit } from '@angular/core';
import { Entree } from '../entree.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { SearchQueryBuilder } from './searchQueryBuilder.model';
import { map } from 'rxjs/operators';
import { Resume } from '@app/admin/resume.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  entree: Entree = new Entree();
  resume : Resume = new Resume();
  resultList : any;
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
        }))).subscribe((value : any) => {
          console.log('value', value)
          this.resume.$nic = value[0].nic;

          //getting the link
          let some = this._db.collection('resumes',
          ref => searchQueryBuilder.queryBuilder(ref, this.resume))
          .snapshotChanges().pipe(
            map(actions => actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return data;
            }))).subscribe((result) => {
              console.log('result', result);
              this.resultList = result;
  
            });

        });

   



    // let start: string = 'Roshen';
    // let end = start+'\uf8ff';

    // this._db.collection('entries', ref=> 
    //   ref.orderBy('lname').limit(5).startAt(start).endAt(end)).valueChanges().subscribe(value => {
    //     console.log(value, 'value');
    //   });


  }

}

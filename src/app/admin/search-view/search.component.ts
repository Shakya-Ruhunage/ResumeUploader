import { Component, OnInit } from '@angular/core';
import { Entree } from '../entree.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { SearchQueryBuilder } from './searchQueryBuilder.model';
import { map } from 'rxjs/operators';
import { Resume } from '@app/admin/resume.model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  entree: Entree = new Entree();
  resume: Resume = new Resume();
  resultList: any = [];
  options = ['Select an Option', 'Admin', 'Customer Service', 'Finance', 'HR', 'IT','Legal','Logistics','Part Time','Supply Chain','Teaching','Other'];

  constructor(private _db: AngularFirestore,private titlecasePipe:TitleCasePipe) { }

  ngOnInit() {
  }

  public search() {
    console.log('jsifjwfiwhgiw', this.entree);
    this.resultList = [];

    let searchQueryBuilder: SearchQueryBuilder = new SearchQueryBuilder();
    
    //create search operation
    let some = this._db.collection('entries',
      ref => searchQueryBuilder.queryBuilder(ref, this.entree))
      .snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return data;
        }))).subscribe((value: any) => {
          console.log('value', value)
          value.forEach(element => {
            console.log(element);
            if (element.nic) {
              this.resume.$nic = element.nic;
              let some = this._db.collection('resumes',
                ref => searchQueryBuilder.queryBuilder(ref, this.resume))
                .snapshotChanges().pipe(
                  map(actions => actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return data;
                  }))).subscribe((result) => {
                    result.forEach((res: any) => {
                      let index = this.resultList.findIndex(element => {
                        return element.link === res.link;
                      });

                      if (index === -1) {
                        this.resultList.push(res);
                        console.log('result', this.resultList);
                      }
                    });
                  });
            }
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
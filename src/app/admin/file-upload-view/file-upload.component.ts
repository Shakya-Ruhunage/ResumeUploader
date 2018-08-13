import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
import {Entree} from '../entree.model';
import { Resume } from '@app/admin/resume.model';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  options = ['Select an Option','Sales','Human Resources','IT','Law','Other'];
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  uploadState: Observable<string>;
  entree: Entree = new Entree();
  resume : Resume = new Resume();
  event : any;
  showProgressBar : boolean = false;

  constructor(private afStorage: AngularFireStorage,private _db : AngularFirestore) { }


  ngOnInit() {
  }

  add() {
    this.showProgressBar = true;
    this._db.collection('entries').add(JSON.parse(JSON.stringify(this.entree)))
      .then(()=> {
        console.log('success');
        this.upload(this.event).subscribe((data) => {

          if (data.totalBytes === data.bytesTransferred) {
            data.ref.getDownloadURL().then(url => {
              this.resume.$link = url;
              this.resume.$nic = this.entree.$nic;

              //adding the reference to the storage
              this._db.collection('resumes').add(JSON.parse(JSON.stringify(this.resume)))
             .then(() =>{
               console.log('success');
               this.showProgressBar = false;
              }).catch((error:any)=>{
              });

            }).catch(error => {
              console.log('error', error);
            });
          }
        });
      }).catch((error) => {

      });
  }

  setFile(event){
   this.event = event;
  }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();

   return  this.task.snapshotChanges();

  }
}

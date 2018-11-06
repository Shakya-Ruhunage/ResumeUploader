import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map , finalize } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
import { Entree } from '../entree.model';
import { Resume } from '@app/admin/resume.model';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-file-update',
  templateUrl: './file-update-view.component.html',
  styleUrls: ['./file-update-view.component.css']
})
export class FileUpdateViewComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  uploadState: Observable<string>;
  entree: Entree = new Entree();
  resume: Resume = new Resume();
  event: any;
  showProgressBar: boolean = false;


  constructor(private afStorage: AngularFireStorage, private _db: AngularFirestore,private _notification: NotificationsService) { }

  ngOnInit() {
  }

  // add() {
  //   this.showProgressBar = true;
  //   this.upload(this.event).subscribe((data) => {

  //     if (data.totalBytes === data.bytesTransferred) {
  //       data.ref.getDownloadURL().then(url => {
  //         this.resume.$link = url;
  //         this.resume.$nic = this.entree.$nic;

  //         //adding the reference to the storage
  //         this._db.collection('resumes').add(JSON.parse(JSON.stringify(this.resume)))
  //           .then(() => {
  //             console.log('success');
  //             this.showProgressBar = false;
  //           }).catch((error: any) => {
  //           });

  //       }).catch(error => {
  //         console.log('error', error);
  //       });
  //     }
  //   });
  // }

  setFile(event) {
    this.event = event;
  }

  upload() {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(this.event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();

    return this.task.snapshotChanges().pipe(
      finalize(() => {
        this.ref.getDownloadURL().subscribe(downloadURL => {
          console.log(downloadURL)
          //resume upload
          this.resume.$link = downloadURL;
          this.resume.$nic = this.entree.$nic;

          //adding the reference to the storage
          this._db.collection('resumes').add(JSON.parse(JSON.stringify(this.resume)))
            .then(() => {
              console.log('success');
              this.showProgressBar = false;
              let temp = {
                position: ["top", "left"],
                animate: "fromTop",
                clickToClose: true,
                content: "This is just some content",
                pauseOnHover: true,
                showProgressBar: false,
                timeOut: 1000,
                title: "This is just a title",
                type: "success"
              };
              this._notification.create('File Uploaded Successfully', '', 'success', temp);
            }).catch((error: any) => {
              //error message
              this.showProgressBar = false;
              let temp = {
                position: ["top", "left"],
                animate: "fromTop",
                clickToClose: true,
                content: "This is just some content",
                pauseOnHover: true,
                showProgressBar: false,
                timeOut: 1000,
                title: "This is just a title",
                type: "success"
              };
              this._notification.create('File Uploaded Error Occured', '', 'error', temp);
            });
        })
      })
    ).subscribe((data) => {
      this.showProgressBar = true;
    });
  }

  }

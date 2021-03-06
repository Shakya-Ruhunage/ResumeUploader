import { Component, OnInit } from '@angular/core';
import { LoginCredential } from '../loginCredential.model';
import { User } from '../user.interface';
import { Router, RouterLinkActive } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';
import {ConnectionService} from 'ng-connection-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCredential: LoginCredential = new LoginCredential();
  users: Observable<any[]>;

  constructor(private _router: Router, private _db: AngularFirestore,
    private _notification: NotificationsService,
    private connection : ConnectionService) { }

  ngOnInit() {
    this.users = this._db.collection('users').valueChanges();

    this.users.subscribe((users: User[]) => {
      console.log('users', users[0].name);
    });
  }

  /**
   * Submits the login form
   */
  public onSubmit(): void {
    // this.connection.monitor().subscribe(isConnected =>{
    //   if(isConnected){
    //     let temp = {
    //       position: ["top", "left"],
    //       animate: "fromTop",
    //       clickToClose: true,
    //       content: "This is just some content",
    //       pauseOnHover: true,
    //       showProgressBar: false,
    //       timeOut: 1000,
    //       title: "This is just a title",
    //       type: "success"
    //     };
    //     this._notification.create('Connection exists','Success','',temp);
    //   }
    //   else{
    //     let temp = {
    //       position: ["top", "left"],
    //       animate: "fromTop",
    //       clickToClose: true,
    //       content: "This is just some content",
    //       pauseOnHover: true,
    //       showProgressBar: false,
    //       timeOut: 1000,
    //       title: "This is just a title",
    //       type: "error"
    //     };
    //     this._notification.create('No Internet access','error','',temp);
    //   }
    // });
    
    // //Login validation code
    let some = this._db.collection('users',
      ref => ref
        .where('name', '==', this.loginCredential.$email)
        .where('password', '==', this.loginCredential.$password))
      .snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
          return data;
        }))).subscribe(userExists.bind(this));


    // /**
    // * Submits the login form
    // */
    function userExists(user: User[]) {
      console.log(user);
      if (user.length !== 0) {
        this._router.navigate(['admin']);
        localStorage.setItem('user',JSON.stringify(user[0]));
        console.log(JSON.stringify(user[0]));

      } else {
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
        this._notification.create('user does not exist', '', 'error', temp);
      }
    }
  }

}

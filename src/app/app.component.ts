
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { User, AppState } from './interfaces';
import { addNewUser } from './ngrx/users.actions';
import { selectAllUsers } from './ngrx/users.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    
    users$:Observable<User[]>

    user:User

    userForm = new FormGroup({
        id: new FormControl(''),
        rank: new FormControl(''),
        name: new FormControl(''),
        surname: new FormControl(''),
        age: new FormControl('')
    });

    constructor(private store:Store<AppState>){}

    ngOnInit(){
        this.users$ = this.store.pipe(select(selectAllUsers))
    }

    get uf(){
        return this.userForm
    }

    insertNewUser(){
        this.user = {
            id:Number(this.userForm.controls.id.value),
            rank:Number(this.uf.controls.rank.value),
            name:String(this.userForm.controls.name.value),
            surname:String(this.userForm.controls.surname.value),
            age:Number(this.userForm.controls.age.value)
        }

        this.store.dispatch(addNewUser({user:this.user}))
    }
}

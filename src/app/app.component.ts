
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { User, StoreState } from './ngrx/models';
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
        name: new FormControl(''),
        age: new FormControl('')
    });

    constructor(private store:Store<StoreState>){}

    ngOnInit(){
        this.users$ = this.store.pipe(select(selectAllUsers))
    }

    get uf(){
        return this.userForm
    }

    insertNewUser(){
        this.user = {
            id:Math.random() * 10,
            name:String(this.userForm.controls.name.value),
            age:Number(this.userForm.controls.age.value)
        }

        this.store.dispatch(addNewUser({user:this.user}))
    }
}

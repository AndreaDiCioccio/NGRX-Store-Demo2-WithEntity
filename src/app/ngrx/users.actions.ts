import { createAction, props } from '@ngrx/store';
import { User } from './models';

export const getUsers = createAction(
    '[Home] Get Users'
)

export const addNewUser = createAction(
    '[Home] Add New User',
    props< {user:User} >() 
)
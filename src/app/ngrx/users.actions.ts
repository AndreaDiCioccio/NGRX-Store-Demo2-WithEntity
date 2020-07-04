import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces';

export const getUsers = createAction(
    '[Home] Get Users'
)

export const addNewUser = createAction(
    '[Home] Insert New User',
    props< {user:User} >() 
)
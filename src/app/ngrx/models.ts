import { EntityState } from '@ngrx/entity';

export interface User{
    rank:number
    name:string
    surname:string
    age:number
}


export function compareUsers(u1:User, u2:User){

    const compare = u1.rank - u2.rank;

    if (compare > 0) {
        return 1;
    }else if ( compare < 0) {
        return -1;
    }else return 0;

}

export interface StoreState{
    users:any
}

export interface UsersListState extends EntityState<User>{}
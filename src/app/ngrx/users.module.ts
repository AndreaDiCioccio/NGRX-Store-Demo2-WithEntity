import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as reducers from './users.reducers'

@NgModule({
    imports: [
        StoreModule.forFeature('users', reducers.usersReducer)
    ]
})

export class UserModule {}
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromUsers from './users.reducers'

@NgModule({
  imports: [
    StoreModule.forFeature('users', fromUsers.usersReducer)
  ],
})

export class UserModule {}
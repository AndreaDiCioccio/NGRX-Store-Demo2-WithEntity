import { createSelector, createFeatureSelector } from '@ngrx/store'
import * as fromUsers from './users.reducers'
import { UsersListState } from '../interfaces'

export const selectUsersState = createFeatureSelector<UsersListState>('users')

export const selectAllUsers = createSelector(
    selectUsersState,
    fromUsers.selectAll
)
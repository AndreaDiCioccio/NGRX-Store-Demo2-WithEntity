import { User, compareUsers, UsersState } from './models'
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import { on, createReducer, State, Action } from '@ngrx/store'
import { addNewUser } from './users.actions'

export const adapter = createEntityAdapter<User>({
    sortComparer:compareUsers
})

export const initialUsersState = adapter.getInitialState()

export const usersReducer = createReducer(
    initialUsersState,
    on(addNewUser, (state, action) => adapter.addOne(action.user, state))
)

export const {selectAll} = adapter.getSelectors()

export function reducer(state: UsersState | undefined, action: Action) {
    return usersReducer(state, action)
}
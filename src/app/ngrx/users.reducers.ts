import { User, compareUsers } from './models'
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import { on, createReducer } from '@ngrx/store'
import { addNewUser } from './users.actions'

export const adapter = createEntityAdapter<User>({
    sortComparer:compareUsers,
    selectId:user => user.rank
})

export const initialUsersState = adapter.getInitialState()

export const usersReducer = createReducer(
    initialUsersState,
    on(addNewUser, (state, action) => adapter.addOne(action.user, state))
)

export const {selectAll} = adapter.getSelectors()
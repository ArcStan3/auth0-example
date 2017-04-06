import { createStore, combineReducers, applyMiddleware } from 'redux'
import { authReducer, lockReducer, authListener } from './auth'

const store = createStore(
  combineReducers({
    lock: lockReducer,
    auth: authReducer,
    user: (state = {}, action) => {
      switch (action.type) {
        case 'SET_USER':
          return action.payload
        case 'CLEAR_USER':
          return {}
        default:
          return state

      }
    }
  })
)

authListener(store.dispatch)

export default store

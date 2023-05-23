import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './users/userSlice'

const rootReducer = combineReducers({
    user: userReducer 
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
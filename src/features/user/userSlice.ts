import { createSlice } from '@reduxjs/toolkit'
import { GithubRepository, Owner } from './../../models/github-repositories.dto'
import { CONSTANTS } from './../../util/constants'

export type Store = {
    user: UserStore
}

export type UserStore = {
    searchString: string
    userInfo: Owner | null
    userRepositories: GithubRepository[] | null
}

export type StoreSlice = {
    name: string
    initialState: Store
    reducers: any
}


export const defaultUserState: UserStore = {
    searchString: CONSTANTS.EMPTY_STRING,
    userInfo: null,
    userRepositories: null,
}

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: defaultUserState,
    reducers: {
        setSearchString: (state, action) =>
            void (state.searchString = action.payload),
        setUserInfo: (state, action) => void (state.userInfo = action.payload),
        setUserRepositories: (state, action) =>
            void (state.userRepositories = action.payload),
    },
})

// Action creators are generated for each case reducer function
export const { setSearchString, setUserInfo, setUserRepositories } =
    userInfoSlice.actions

export default userInfoSlice.reducer

import { confirmPasswordReset } from '@firebase/auth'
import * as types from './mutation-types'

//commit from vuex, then payload

export const signIn = ({commit}, user_payload) => {
    commit(types.SIGN_IN, user_payload)
}

export const signOut = ({commit}) => {
    commit(types.SIGN_OUT)
}

export const signUp = ({commit}) => {
    commit(types.SIGN_UP)
}

export const setEvents = ({commit}, payload) => { //use dispatch to kick this off
    commit(types.SET_EVENTS, payload)
}
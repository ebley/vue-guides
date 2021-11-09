import * as types from './mutation-types'

export const mutations = {
    [types.INIT_JOKES] (state, payload) { //mutations have 2 items state and payload
        state.jokes.push(...payload) //push each payload item into our jokes array
    },
    [types.ADD_JOKE] (state, payload) {
        state.jokes.push(payload) 
    },
    [types.CLEAR_JOKES] (state, payloadNotUsed) {
        state.jokes = []
    },
    [types.REMOVE_JOKE] (state, whichIndexPayload) {
        state.jokes.splice(whichIndexPayload,1)
    }
}
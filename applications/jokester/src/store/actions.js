//https://karljoke.herokuapp.com/jokes/ten

import * as types from './mutation-types'

export const initJokes = ({commit}) => {
    fetch('https://karljoke.herokuapp.com/jokes/ten')
        .then(response => response.json())
        .then(json => commit(types.INIT_JOKES, json))
}

export const addJoke = ({commit}) => {
    fetch('https://karljoke.herokuapp.com/jokes/random')
    .then(response => response.json())
    .then(json => commit(types.ADD_JOKE, json))
}

export const clearJokes = ({commit}) => {
    commit(types.CLEAR_JOKES, [])
}

export const removeJoke = ({commit}, indexPayload) => {
    commit(types.REMOVE_JOKE, indexPayload)
}

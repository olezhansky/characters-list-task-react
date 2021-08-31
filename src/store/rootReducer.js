import { SET_CHARACTERS } from "./types";

const initialState = {
    characters: []
}

export const rootReducer = (state = initialState, action) => {
    switch( action.type) {
        case SET_CHARACTERS:
            console.log(action.payload)
            return {
                ...state,
                characters: action.payload
            }
        default:
            return state;
    }
}
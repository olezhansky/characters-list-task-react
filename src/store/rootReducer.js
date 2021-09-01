import { SET_CHARACTERS } from "./types";

const initialState = {
    characters: [],
    comments: []
}

export const rootReducer = (state = initialState, action) => {
    switch( action.type) {
        case SET_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }
        default:
            return state;
    }
}
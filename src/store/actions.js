import getCharacters from "../api/getCharacters";
import { ADD_COMMENT, SET_CHARACTERS } from "./types";

export function getCharactersAction() {
    return function (dispatch) {
        getCharacters().then((response) => {
            dispatch({type: SET_CHARACTERS, payload: response.data.results});
        });
    };
}

export const addCommentAction = (character, value) => ({
    type: ADD_COMMENT,
    payload: {character, value}
})
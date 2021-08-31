import getCharacters from "../api/getCharacters";
import { SET_CHARACTERS } from "./types";

export function getCharactersAction() {
    return function (dispatch) {
        getCharacters().then((response) => {
            dispatch({type: SET_CHARACTERS, payload: response.data.results});
        });
    };
}
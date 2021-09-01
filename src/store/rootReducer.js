import { ADD_COMMENT, SET_CHARACTERS } from './types';

const initialState = {
  characters: [],
  comments: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          {created: action.payload.character.created, comment: action.payload.value},
        ],
      };
    default:
      return state;
  }
};

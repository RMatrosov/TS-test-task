import {addUserHandler, deleteUserHandler, editUserHandler} from "./handlers/handlers";
import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  SET_EDITED_USERS,
  SET_IS_OPEN,
  SET_LOADED,
  SET_USERS
} from "./constants/constants";

const defaultState = {
  users: [],
  isLoaded: false,
  editedUser: {
    "name": '',
    "email": '',
    "about": '',
    "link": '',
  },
  isOpen: false,

}

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      }
    case DELETE_USER:
      return deleteUserHandler(state, action.payload)

    case EDIT_USER:
      return editUserHandler(state, action.payload)

    case ADD_USER:
      return addUserHandler(state, action.payload)

    case SET_EDITED_USERS:
      return {
        ...state,
        editedUser: action.payload
      }
    case SET_IS_OPEN:
      return {
        ...state,
        isOpen: action.payload
      }
  }
  return state
}



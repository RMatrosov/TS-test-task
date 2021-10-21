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

export const SET_USERS = "SET_USERS"
export const FETCH_USERS = "FETCH_USERS"
export const DELETED_USERS = "DELETED_USERS"
export const SET_EDITED_USERS = "SET_EDITED_USERS"
export const SET_IS_OPEN = "SET_IS_OPEN"
export const SET_LOADED = "SET_LOADED"

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
    case DELETED_USERS:
      return {
        ...state,
        users: action.payload
      }
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

export const setUsers = payload => ({type: SET_USERS, payload})
export const setLoaded = payload => ({type: SET_LOADED, payload})
export const fetchUsers = () => ({type: FETCH_USERS})
export const setEditedUsers = payload => ({type: SET_EDITED_USERS, payload})
export const setIsOpen = payload => ({type: SET_IS_OPEN, payload})

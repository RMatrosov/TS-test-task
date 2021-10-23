import {
  ADD_USER,
  DELETE_USER, DELETE_USER_FROM_SERVER,
  EDIT_USER, FETCH_USERS, PATH_USER, POST_USER,
  SET_EDITED_USERS,
  SET_IS_OPEN,
  SET_LOADED,
  SET_USERS
} from "../constants/constants";

export const setUsers = payload => ({type: SET_USERS, payload})
export const setLoaded = payload => ({type: SET_LOADED, payload})
export const fetchUsers = () => ({type: FETCH_USERS})
export const setEditedUsers = payload => ({type: SET_EDITED_USERS, payload})
export const setIsOpen = payload => ({type: SET_IS_OPEN, payload})
export const pathUser = (id, newUser) => ({type: PATH_USER, id, newUser})
export const editUser = payload => ({type: EDIT_USER, payload})

export const postUser = (newUser) => ({type: POST_USER, newUser})
export const addUser = payload => ({type: ADD_USER, payload})

export const deleteUserServer = (id) => ({type: DELETE_USER_FROM_SERVER, id})
export const deleteUser = payload => ({type: DELETE_USER, payload})

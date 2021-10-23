export const editUserHandler = (state, payload) => {
  const filteredUsers = state.users.map((user) => user._id === payload._id ? payload : user)
  return {
    ...state,
    users: filteredUsers,
  }
}

export const addUserHandler = (state, payload) => {
  const newData = [...state.users, payload]
  return {
    ...state,
    users: newData,
  }
}

export const deleteUserHandler = (state, payload) => {
  const newData = state.users.filter(user => user._id !== payload._id);
  return {
    ...state,
    users: newData,
  }
}

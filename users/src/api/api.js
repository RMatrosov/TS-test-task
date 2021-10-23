import axios from "axios";


export const patchUsersFromApi = async (id, newUser) => {
  try {
    const {data} = await axios.patch(`http://localhost:3002/cards/${id}`, {
          name: newUser.name,
          email: newUser.email,
          about: newUser.about,
          link: newUser.link,
        },
    )
    return data
  } catch (e) {
    console.log(e)
  }
}

export const addUserToApi = async (newUser) => {
  try {
    const {data} = await axios.post(`http://localhost:3002/cards`, {
          name: newUser.name,
          email: newUser.email,
          about: newUser.about,
          link: newUser.link,
        },
    )
    return data
  } catch (e) {
    console.log(e)
  }
}

export const deleteUserFromApi = async (id) => {
  try {
    const {data} = await axios.delete(`http://localhost:3002/cards/${id}`)
    return data
  } catch (e) {
    console.log(e)
  }
}

export const fetchUsersFromApi = async () => {
  try {
    const {data} = await axios.get('http://localhost:3002/cards')
    return data
  } catch (e) {
    console.log(e)
  }
}


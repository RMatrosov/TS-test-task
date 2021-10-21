import axios from "axios";

export const authorize = async (email, password) => {
  try {
    const {data} = await axios.post(`http://localhost:3002/signin`, {
          email: email,
          password: password,
        },
        {
          headers: {'Access-Control-Allow-Origin': '*'}
        }
    )
    if (data.token) {
      localStorage.setItem('jwt', data.token);

      return data;
    }
  } catch (e) {
    console.log(e)
  }
};



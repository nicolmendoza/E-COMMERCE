import axios from "axios";

export const login = async (data) => {
  try {
    const response = await axios.post("https://fakestoreapi.com/auth/login", data);

    return response.data.token;
  } catch (error) {
      console.log(error)
  }
};

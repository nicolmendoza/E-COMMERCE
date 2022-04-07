import axios from "axios";

export const login = async (data) => {
  console.log(data)
  try {
    const response = await axios.post("https://fakestoreapi.com/auth/login", data);
    console.log(response)
    return response
  } catch (error) {
      return error
  }
};

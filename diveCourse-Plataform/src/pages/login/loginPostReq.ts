import axios from 'axios'



const login = async (username:string, password:string) => {
  try {
    const response = await axios.post('http://localhost:5000/login', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios errors (e.g., network issues, server errors)
      console.error('Axios error:', error.message);
      throw new Error('Login failed');
    } else {
      // Handle other errors
      console.error('Login failed:', (error as Error).message);
      throw new Error('Login failed');
    }
  }
};

export default login;
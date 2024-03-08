import axios from 'axios';

export const fetchUserData = async () => {
  try {
    const response = await axios.get('http://localhost:5003/api/user'); // Replace with your actual API endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

import axios from 'axios';

axios.create({
  baseURL: 'https://react-my-burger-94317.firebaseio.com/'
});

export default instance;
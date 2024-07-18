const axios = require('axios');

const login = async () => {
  try {
    const response = await axios.post('http://localhost:3333/sessions', {
      email: 'admin@fastfeet.com',
      password: '123456',
    });
    const { token } = response.data;
    console.log('Token:', token);
    return token;
  } catch (error) {
    console.error('Erro ao fazer login:', error.response ? error.response.data : error.message);
  }
};

login();

import axios from 'axios'

export const register = newUser => {
  return axios
    .post('/register', {
      email: newUser.email,
      username: newUser.username,
      password: newUser.password,
      organisation: newUser.organisation,
      user_type: newUser.user_type
    })
    .then(response => {
      console.log('Registered')
    })
}
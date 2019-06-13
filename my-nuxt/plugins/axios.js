import axios from 'axios'
let options = {
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
}
console.log('axios process.env', process.env)
options.baseURL = ''
export default axios.create(options)
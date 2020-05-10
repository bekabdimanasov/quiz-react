import axios from 'axios'

export default axios.create({
  baseURL: 'https://quiz-react-8c92a.firebaseio.com/'
})
import axios from 'axios'

const KEY = "AIzaSyCpNmNYU13D2J9Q-D4D7ZaF_vuPq9ICjBA"

export default axios.create({
    baseURL:  "https://www.googleapis.com/youtube/v3"
})


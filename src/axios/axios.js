import axios from 'axios'

const instance = axios.create({
	baseURL:'https://www.reddit.com/r/', //dog/top.json
})


export default instance
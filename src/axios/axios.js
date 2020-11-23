import Axios from 'axios'

const instance = Axios.create({
	baseURL:'https://www.reddit.com/r/', //dog/top.json
})


export default instance
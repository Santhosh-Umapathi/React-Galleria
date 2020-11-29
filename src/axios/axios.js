import axios from 'axios'

const API_KEY = "AIzaSyDYsQLxZmB3HOG8NOgywff7XNcVd5Vq0lk"

//Reddit Api
const instance = axios.create({
	baseURL:'https://www.reddit.com/r/',
})

//Firebase Api
const loginInstance = axios.create({
	baseURL:"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+API_KEY
})


export {instance, loginInstance}
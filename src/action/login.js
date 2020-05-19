import axios from 'axios';

const postUser = user => {
    axios.post('http://localhost:3100/user/login', user)
        .then(data => {
            if (data.message) {} else {
                console.log(data)
                localStorage.setItem("token", data.data.token)
            }
        })
}
export default postUser;
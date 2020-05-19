import axios from 'axios';

const test = (state = false, action) => {
    switch (action.type) {
        case 'login':
            return axios.post('http://localhost:3100.user/login', action.user)
                .then(resp => resp.json())
                .then(data => {
                    if (data.message) {} else {
                        console.log(data)
                        localStorage.setItem("token", data.jwt)
                    }
                })
        default:
            return state;
    }
}

export default test;
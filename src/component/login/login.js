import React from 'react';
import axios from 'axios';
import '../../App.css';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';

const style = {
    marginTop: '150px',
    marginLeft: '150px',
}

const style1 = {
    marginTop: '30px',
    marginLeft: '30px'
}



class Login extends React.Component{
    state = {
        email: '',
        password: '',
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value           
        })
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value           
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
      axios.post('http://localhost:3100/user/login',user)
      .then(res => {
        console.log(res.data.token);
      })
      .catch(error => {
        console.log(user);
          console.log(error);
      })
    }

  render() {
      return(
          <div className='reg'>
            <div style={style} className='regis'>
                <h1 style={style1}>Đăng nhập</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className='btn' 
                        value={this.state.email} 
                        onChange={this.handleEmail} 
                        placeholder='Email/Phone'/><br/>
                    <input type="password"
                        className='btn' 
                        value={this.state.password} 
                        onChange={this.handlePassword}
                        placeholder='Password' /><br/>
                    <button type='submit' className='btnRegis'>Đăng nhập</button>
                </form>
                <p className='anotherchoice'>bạn chưa có tài khoản? <Link to='/regis'>Đăng nhập</Link></p>
            </div>
            <div className='logoa'>
                <Link to='/'><img src={logo} className='imglogo' alt=""/></Link>
            </div>
          </div>
      )
  }
}

  
  export default Login;

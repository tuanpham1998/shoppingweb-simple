import React from 'react';
import {Link} from 'react-router-dom';
import '../../style/header.css';
import '../../App.css';

const style = {
  color: 'white',
  marginRight: '15px',
  marginLeft: '15px',
  overFlow: 'hidden',
  textDecoration: 'none'
}

const style1 = {
  color: 'white',
  marginLeft: '75px',
  marginTop: '20px',
}

const a = 1;

class Logres extends React.Component {
    state = {
        open: false,
      };
      onOpenModal = () => {
        this.setState({ open: true });
      };
      onCloseModal = () => {
        this.setState({ open: false });
      };
    
    render(){
        if(a===1){
            return (
            <div className='log-res'>
                <Link to='/regis' style={style}>Đăng kí</Link>|
                <Link to='/login' style={style} onClick={this.onOpenModal}>Đăng nhập</Link><br/>
                <Link to='/'><span className='fa fa-shopping-cart' style={style1}></span></Link>
            </div>
            );
        }
        return(
            <div className='log-res'>
                <Link to='/'><span className='fa fa-shopping-cart' style={style1}></span></Link>
                <strong style={style1}>Tuan</strong>
            </div>
        );
    }
}
export default Logres;

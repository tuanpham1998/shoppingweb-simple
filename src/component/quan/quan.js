import React from 'react';
import axios from 'axios';
import './product.css'
import {Link} from 'react-router-dom';

const productImg= {
    border: '1px solid black',
    marginLeft: '70px',
    width: '230px',
    height: '300px',
}
const prodcutList = {
    marginLeft: '45px',
    marginTop: '35px',
    width: '230px',
    height: '350px',
}

const product = {
    marginTop: '100px',
    marginBottom: '-200px'
}


class Quan extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            product: [],
        }    
    }
    
    componentDidMount() { 
        axios.get('http://localhost:3100/quan')
          .then(res => {
            const product = res.data;
            this.setState({
                product: product,
            });
          })
          .catch(error => console.log(error));
    }
     
    render() {
        return (
            <ul style={product}>
                { this.state.product.map(product => 
                    <li style={prodcutList} key={product._id}>
                        <Link to={'/quandetail/' + product._id}>
                        <img src={require('../../images/' + product.img1)}
                            alt=""
                            style={productImg}
                        />
                        </Link>
                        <div className="name">
                            {product.name}
                        </div>
                        <div className='price'>
                            {product.price}
                        </div>
                    </li>
                )} 
            </ul>
        )
      }
}


export default Quan;

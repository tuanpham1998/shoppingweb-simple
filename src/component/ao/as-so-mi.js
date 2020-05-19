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


class Aokhoac extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            aoa: [],
        }    
    }
    
    componentDidMount() { 
        axios.get('http://localhost:3100/styleAo/aosomi')
          .then(res => {
            const ao = res.data;
            this.setState({
                aoa: ao,
            });
          })
          .catch(error => console.log(error));
    }
     
    render() {
        return (
            <ul style={product}>
                { this.state.aoa.map(aoa => 
                    <li style={prodcutList} key={aoa._id}>
                        <Link to={'/detail/' + aoa._id}>
                        <img src={require('../../images/' + aoa.img1)}
                            alt=""
                            style={productImg}
                        />
                        </Link>
                        <div className="name">
                            {aoa.name}
                        </div>
                        <div className='price'>
                            {aoa.price}
                        </div>
                    </li>
                )} 
            </ul>
        )
      }
}


export default Aokhoac;

import React from 'react';
import axios from 'axios';
import './product.css';

class QuanDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            product: [],
            img: ''
        }
    }

    id = this.props.match.params.id;

    componentDidMount(){
        axios.get('http://localhost:3100/quan/'+ this.id)
          .then(res => {
            const product = res.data;
            this.setState({
                product: product,
                img: product[0].img1
            });
            console.log(this.state.img)
          })
          .catch(error => console.log(error));
    }

    ChangeImg(img){
        this.setState({
            img: img
        })
        console.log(this.state.img)
    }


    render(){
        return(
            <div style={{ marginTop: '100px', marginLeft: '100px' }}> 
                {this.state.product.map(product => 
                    <div key={product._id}>
                        <div className='productImg prod'>
                            <div>
                                <img className='img' src={require('../../images/' + this.state.img)} alt=""/>
                            </div>
                            <div>
                                <img className='imgChange' 
                                    onClick={this.ChangeImg.bind(this, product.img1)} 
                                    src={require('../../images/' + product.img1)} alt=""
                                />
                                <img className='imgChange' 
                                    onClick={this.ChangeImg.bind(this, product.img2)} 
                                    src={require('../../images/' + product.img2)} alt=""
                                />
                            </div>
                        </div>
                        <div className='productInformation prod'>
                            <div className='productName'>{product.name}</div>
                            <div className='productPrice' style={{ color: 'red' }}>{product.price}</div>
                            <div className='prodcutDescription' style={{ opacity: '0.8', fontSize: '14pt'}}>|Còn hàng</div> <hr/>
                            <div className='productSize sle'>*SIZE: <br/>
                                <select className='selectSize'>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                </select>
                            </div>
                            <div className='productQuantity sle'>Số lượng: <br/>
                                <select className='selectQuantity'>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>

                        <div className='Buy'>
                            <button className='btnBuy'>ĐĂNG KÝ MUA</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default QuanDetail;
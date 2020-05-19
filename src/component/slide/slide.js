import React from 'react';
import {Slide} from 'react-slideshow-image';
import './slide.css';

const imgs = [
    'ak1-1.jpg',
    'ak2-1.jpg',
    'ak3-1.jpg',
]

const style = {
    paddingTop: '130px',
    fontSize: '20pt',
    marginLeft: '30px'
}

const style1 = {
    paddingTop: '150px',
    fontSize: '20pt',
    marginLeft: '650px'
}


const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false
  }

class SlideShow extends React.Component{
    

    render(){
        return(
            <div>
                <div className="slide1">
                    <p style={style}>Sản phẩm của tháng</p>
                    <div className="slideshow">
                        <Slide {...properties} className='show'>
                            <div>
                                <img src={require('../../images/'+ imgs[0])} alt="" className="slideStyle"/>
                            </div>
                            <div>
                                <img src={require('../../images/'+ imgs[1])} alt="" className="slideStyle"/>
                            </div>
                            <div>
                                <img src={require('../../images/'+ imgs[2])} alt="" className="slideStyle"/>
                            </div>
                        </Slide>
                    </div>
                </div>
                <div className='slide2'>
                    <p style={style1}>Sản phẩm mới</p>
                    <div className="slideshow2">
                        <Slide {...properties} className='show1'>
                            <div>
                                <img src={require('../../images/'+ imgs[0])} alt="" className="slideStyle1"/>
                            </div>
                            <div>
                                <img src={require('../../images/'+ imgs[1])} alt="" className="slideStyle1"/>
                            </div>
                            <div>
                                <img src={require('../../images/'+ imgs[2])} alt="" className="slideStyle1"/>
                            </div>
                        </Slide>
                    </div>
                </div>

                <div className='slide3'>
                    <p style={style1}>Sản phẩm được giảm giá</p>
                    <div className="slideshow3">
                        <Slide {...properties} className='show1'>
                            <div>
                                <img src={require('../../images/'+ imgs[0])} alt="" className="slideStyle1"/>
                            </div>
                            <div>
                                <img src={require('../../images/'+ imgs[1])} alt="" className="slideStyle1"/>
                            </div>
                            <div>
                                <img src={require('../../images/'+ imgs[2])} alt="" className="slideStyle1"/>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        )
    }
}

export default SlideShow;
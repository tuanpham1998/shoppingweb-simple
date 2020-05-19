import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

class Footer extends React.Component{
    render() {
        return(
            <div className='footer'>
                <div className='content'> Liên hệ: <br />
                    Email: hahashop@gmail.com <br/>
                    Hotline: 0123456789 <br/>
                    Địa chỉ: 1/2/3/4 Đường ABC, Phường ABC, Quận ABC, TP ABC
                </div>

                <div  className='content1'>Thông tin: <br/>
                    <Link to='/about'>Giới thiệu <br/></Link>
                    <Link to='/tuyendung'>Tuyển dụng <br/></Link>
                </div>

                <div className='content1'>Trợ giúp: <br/>
                    <Link to='/huong-dan-mua-hang'>Hướng dẫn mua hàng<br/></Link>
                    <Link to='/cau-hoi'>Câu hỏi thường gặp<br/></Link>
                </div>

                <div className='content1'>Chính sách: <br/>
                    <Link to='/doi-tra'>Chính sách đổi trả<br/></Link>
                    <Link to='/vip-customer'>Khách hàng Vip<br/></Link>
                </div>
            </div>
        )
    }
}

export default Footer;
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from '../../App';
import Test1 from '../test/test';
import Header from '../header/header';
import Regis from '../register/register';
import Login from '../login/login';
import Ao from '../ao/ao';
import Quan from '../quan/quan';
import SlideShow from '../slide/slide';
import Footer from '../footer/footer';
import AoDetail from '../ao/ao_detial';
import Aokhoac from '../ao/ao-khoac';
import AoSomi from '../ao/as-so-mi';
import AoThun from '../ao/ao-thun';
import QuanShort from '../quan/quan-short';
import QuanJean from '../quan/quan-jean';
import QuanDetail from '../quan/quan-detail';
import Giay from '../giay/giay';
import Non from '../non/non';

function Dashboard() {
    return (
        <Router>
            <div className='dashboard'>
                <header><Header /></header>
                <Switch>
                    <Route path='/app' component={App} />
                    <Route path='/test' component={Test1} />
                    <Route path='/regis' component={Regis} />
                    <Route path='/login' component={Login} />
                    <Route path='/ao' component={Ao} />
                    <Route path='/ao-khoac' component={Aokhoac} />
                    <Route path='/ao-so-mi' component={AoSomi} />
                    <Route path='/ao-thun' component={AoThun} />
                    <Route path='/detail/:id' component={AoDetail} />
                    <Route path='/quan' component={Quan} />
                    <Route path='/quan-short' component={QuanShort} />
                    <Route path='/quan-jean' component={QuanJean} />
                    <Route path='/quandetail/:id' component={QuanDetail} />
                    <Route path='/giay' component={Giay} />
                    <Route path='/non' component={Non} />
                    <Route path='/' component={SlideShow} />        
                </Switch>
                <footer><Footer /></footer>
            </div>
        </Router>
    );
}

export default Dashboard;
import React, { Component } from 'react';
import Sidebar from './Sidebar';
import NavBar from './Navbar';

class WelcomePage extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar></NavBar>
                    <Sidebar></Sidebar>    
                </div>
            </div>
        );
    }
}
export default WelcomePage;
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import  propTypes from 'prop-types';
import { connect } from 'react-redux';
import {logoutUser} from '../actions/authActions';
import '../Navbar.css';
import {clearCurrentUser} from '../actions/expenseAction'


class Navbar extends Component{
    onLogoutClick(e){
        e.preventDefault();
        this.props.clearCurrentUser();
        this.props.logoutUser(); 
        window.location.href = '/login';
    }
    render (){
        const { isAuthenticated, user} = this.props.auth;
        return(
            <nav className="navbar bg-dark">
            <h1>
                <Link onClick={this.onLogoutClick.bind(this)} to="/login" >Logout</Link>
            </h1>
            </nav>
        )
        }    
}

Navbar.propTypes = {
    logoutUser: propTypes.func.isRequired,
    auth: propTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps,{ logoutUser, clearCurrentUser })(Navbar);

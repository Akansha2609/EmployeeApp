import React,{Component} from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {loginUser} from '../actions/authActions';

class Login extends Component{
    constructor(){
        super();
        this.state ={
            username: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/Welcome#/dashboard');
        }
    }
    componentWillReceiveProps(nextProps){

        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/Welcome#/dashboard');
        }

        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

        const loginUser ={
            username:this.state.username,
            password:this.state.password
        };

        this.props.loginUser(loginUser);
        console.log(loginUser);
    }
    render (){
        const {errors} = this.state;
        return(
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Login</h1>
                            <p className="lead text-center">Sign in to your account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className={classnames ("form-control form-control-lg", {
                                        'is-invalid': errors.username
                                    })} 
                                    placeholder="Username" name="username" value={this.state.username} onChange={this.onChange}/>
                                    {errors.username && (<div className="invalid-feedback">{errors.username}</div>)}
                                </div>
                                <div className="form-group">
                                    <input type="password" className={classnames ("form-control form-control-lg", {
                                        'is-invalid': errors.password
                                    })}  
                                    placeholder="Password" name="password" 
                                    value={this.state.password} onChange={this.onChange}/>
                                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4"  value="submit"/> 
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 

Login.propTypes = {
    loginUser: propTypes.func.isRequired,
    auth: propTypes.object.isRequired,
    errors: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToProps,{loginUser})(Login);

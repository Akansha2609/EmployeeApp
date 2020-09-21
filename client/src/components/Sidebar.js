import React,{Component} from 'react';
import { NavLink,Route,Switch,HashRouter } from 'react-router-dom';
import '../Sidebar.css';
import Dashboard from './Dashboard';
import Team from './Team';
import About from './About';

class Sidebar extends Component{
    render(){
        return(
		<HashRouter>
            <div className='menu-position' style={{ display: "flex" }}>
                <div className='menu-left-part' style={{
                    padding: "10px",
                    width: "30%",
                    background: "red"
                        }}>
                    <h1><NavLink to='/dashboard'>Dashboard</NavLink></h1>
                    <div className='ui divider'></div>
                    <h1><NavLink to='/about'>About</NavLink></h1>
                    <div className='ui divider'></div>
                    <h1><NavLink to='/team'>Team</NavLink></h1>
                    <div className='ui divider'></div>
                </div>
                <div className='detail-right-part'style={{ flex: 1, padding: "10px" }}>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/about" component={About} />
                    <Route path="/team" component={Team} />
                   
                </div>
            </div>
		</HashRouter>
        )
    }
}

export default Sidebar;
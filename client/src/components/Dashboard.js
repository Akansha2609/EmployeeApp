import React,{Component, Fragment} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {getExpenses} from '../actions/expenseAction';
import myImage from '../images/image.jpg';
import '../Dashboard.css'
import ExpenseItem from './ExpenseItem'


class Dashboard extends Component{
    componentDidMount(){
        this.props.getExpenses();
        //console.log("component Mounted")
    }
    /*componentWillReceiveProps(props){
        let expenseItems;
        console.log(this.props.expense)
        if (this.props.expense !== null && this.props.expense.length>0){
            expenseItems= this.props.expense.expenses.map(expense =>(
                <ExpenseItem key={expense.username} expense={expense}/>
            ))

         
        }
    }*/

    render (){
        
        const {expenses,loading} = this.props.expense;
        let expenseItems;
        let amountTotal;
        if(expenses === null || loading ){

        }else{
            if(expenses.length > 0){
                
                expenseItems= expenses.map(expense =>(
                    <ExpenseItem key={expense._id} expense={expense}/>

                ))   
                
                amountTotal = calculateAmount(expenses);
            }

        }

        function calculateAmount(expenses){
            var element = 0;
            for (let index = 0; index < expenses.length; index++) {
                 element = element+expenses[index].amount;
                 console.log(element);
                
            }
            return element;
        }
            
        
        //const {student}=this.props.auth;
        
        
        return(
        <div>
            <div>

            <div className="header">
                <div className="d3">
                <div><img src={myImage} className="imagesize ui circular image" /></div>
                </div>
                <div className="d4"> <div> <h3>Welcome {this.props.auth.user.username}</h3></div>
                <div><h5>Last Login : 03-May-2019</h5></div>

                </div>
            </div>
            </div>

            <div className="ui divider"></div>
            <div><h3>Account Balance: {amountTotal}</h3></div>
            <div>
            <table className="ui celled fixed single line table">
                <thead className="">
                <tr className="">
                <th className="">Date</th>
                <th className="">Description</th>
                <th className="">Amount</th>
                </tr>
                </thead>
                {expenseItems}
                </table>
            </div>

            <div className="ui divider"></div>

            <div className="main">
            <div className="d1">
                <div><h3>Subscribe to Alerts</h3></div><br />

                <div className="ui checkbox">
                <input type="checkbox" /><label>SMS Alerts</label></div><br />
                <div className="ui checkbox">
                <input type="checkbox" /><label>Marketting Newsletter</label>
                </div><br />
                <div className="ui checkbox">
                <input type="checkbox" /><label>Flyers</label>
                </div><br /><br />
                <button className="ui primary button" onClick={this.onSubmit}>Submit</button>
            </div>
            <div className="d2">
                <div><h3>Two Way Data Binding</h3></div>

                <div className="ui focus input input-design"><input type="text" placeholder="Enter Value for two way binding" name="heading"  /></div>
            </div>
            </div>

        </div>
    )}
} 

Dashboard.propTypes ={
    getExpenses: propTypes.func.isRequired,
    expense: propTypes.object.isRequired,
    auth: propTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    expense:state.expense
})

export default connect(mapStateToProps,{getExpenses})(Dashboard);

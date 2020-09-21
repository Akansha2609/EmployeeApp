import React,{Component} from 'react';
import propTypes from 'prop-types'


class ExpenseItem extends Component{
    render (){
        const {expense}=this.props;
        if(expense !== null){
            console.log(expense)
        }
        return(
            
                <tbody className="">
                <tr className="">
                         <td className="">{expense.date}</td>
                         <td className="">{expense.description}</td>
                         <td className="">{expense.amount}</td>
                </tr>
               
              </tbody>
            
     )
        }
} 


ExpenseItem.propTypes = {
    expense: propTypes.object.isRequired
}

export default ExpenseItem;

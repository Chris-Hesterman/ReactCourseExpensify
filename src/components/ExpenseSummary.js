import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';

export const ExpenseSummary = (props) => {
    const expenseWord = props.expensesCount === 1 ? ' expense ': ' expenses ';
    const formattedExpensesTotal = numeral(props.expensesTotal / 100).format('$0,0.00');

    return (
        <div>
            <h1>Viewing { props.expensesCount }
                { expenseWord }
                totalling { formattedExpensesTotal } 
            </h1>
        </div>
    );
};
            
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: totalExpenses(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);
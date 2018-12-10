import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('should return 0 if no expenses', () => {
    const expenseTotal = selectExpensesTotal([]);
    
    expect(expenseTotal).toBe(0);
});

test('should return correct total for one expense', () => {
    const expenseTotal = selectExpensesTotal([expenses[1]]);
    
    expect(expenseTotal).toBe(350);
});

test('should return correct total for one expense', () => {
    const expenseTotal = selectExpensesTotal(expenses);
    
    expect(expenseTotal).toBe(1845);
});


import expenses from '../fixtures/expenses';
import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should correctly render info for no expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={0} expensesTotal={0} />);

    expect(wrapper).toMatchSnapshot();
})

test('should correctly render info for 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={345} />);

    expect(wrapper).toMatchSnapshot();
});

test('should render correctly for 2 expenses', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={[]} expensesTotal={234234} />);

    expect(wrapper).toMatchSnapshot();
});